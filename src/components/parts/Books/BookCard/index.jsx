'use client';
import React from 'react';
import Image from 'next/image';
import BookCardAction from '@/components/parts/Books/BookCardAction';
import useAuth from '@/stores/auth';

const BookCard = ({
  id,
  ...props
}) => {
  const { isLogged } = useAuth();

  return (
    <div className="flex overflow-hidden card">
      <div className="p-3 pr-0 col-span-3">
        <figure className="rounded-sm overflow-hidden relative w-[300px] aspect-[16/9]">
          <Image
            src={props.image}
            alt={props.title + ' cover'}
            layout="fill"
            objectFit="cover"
          />
        </figure>
      </div>

      <div className="p-3 w-full">
        <h2 className="card-title mb-4">{props.title}</h2>
        
        <div className="flex justify-between gap-2">
          <p className="font-small">Author</p>
          <p>{props.author}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="font-small">Publisher</p>
          <p>{props.publisher}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="font-small">Publish Year</p>
          <p>{props.year}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="font-small">Total Pages</p>
          <p>{props.pages}</p>
        </div>

        {isLogged ? (
          <div className="card-actions justify-end mt-2">
            <BookCardAction bookId={id} />
          </div>
        ) : null}
      </div>

    </div>
  );
}

export default BookCard;

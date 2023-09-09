import { writeFile } from 'fs/promises';
import path from 'path';

export const uploadFile = async (file, pathLocation) => {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = file.name.toLowerCase().split(' ').join('-');
  const filePath = path.join( pathLocation, Date.now() + '-' + fileName);

  // Uploaded image will be saved in root directory of public
  const finalPath = path.join(process.cwd(), 'public', filePath);

  await writeFile(finalPath, buffer);

  return filePath.replace('\\', '/');
};

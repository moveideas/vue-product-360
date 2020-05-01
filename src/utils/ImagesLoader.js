export default function ImagesLoader(images) {
  const promises = [];
  if (images) {
    images.map((src) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onabort = () => reject(src);
      img.onerror = () => reject(src);
    }));
  }
  return Promise.all(promises);
}

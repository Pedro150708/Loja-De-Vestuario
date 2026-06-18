export function getProductImage(imagem) {
  if (!imagem) return "https://via.placeholder.com/340x380?text=Sem+Imagem";

  // já é URL completa
  if (imagem.startsWith("http")) return imagem;

  // imagem local no React (public/produtos)
  return `/produtos/${imagem}`;
}

export function getImagemUrl(imagem) {
  if (!imagem) return "https://via.placeholder.com/340x380?text=Sem+Imagem";

  if (imagem.startsWith("http")) return imagem;

  return `${import.meta.env.BASE_URL}produtos/${imagem}`;
}
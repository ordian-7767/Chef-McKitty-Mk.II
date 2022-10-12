const removeAllSkeletonElement = () => {
  const skeletonElement = document.querySelectorAll('p, h2, h3, h4, img, div');
  skeletonElement.forEach((element) => {
    element.classList.remove('skeleton-text', 'skeleton-image', 'skeleton-effect-fade');
  });
};

export { removeAllSkeletonElement };

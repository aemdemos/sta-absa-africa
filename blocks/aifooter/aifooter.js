export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`aifooter-${cols.length}-cols`);

  // setup image aifooter
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('aifooter-img-col');
        }
      }
    });
  });

  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pics = col.querySelectorAll('picture');
      if (pics) {
        [...pics].forEach((pic) => {
          const nextsibling = pic.nextElementSibling;
          nextsibling.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              node.remove(); // Remove text nodes
            }
          });
          nextsibling.prepend(pic);
        });
      }
    });
  });
}

// Sample book content
const bookText = `
  Once upon a time, there was a little girl who lived in a village near the forest.
  Whenever she went out, the little girl wore a red riding cloak, so everyone in the village called her Little Red Riding Hood.
  One morning, Little Red Riding Hood asked her mother if she could go to visit her grandmother as it had been awhile since they'd seen each other.
  Her mother agreed and packed a nice basket for Little Red Riding Hood to take to her grandmother.

  When the basket was ready, the little girl put on her red cloak and kissed her mother goodbye. 
  "Remember, go straight to Grandma’s house," her mother cautioned. "Don’t dawdle along the way and please don’t talk to strangers!"

  But of course, the minute she stepped into the woods...
`;

const wordsPerPage = 30;
let pages = [];
let currentPage = 0;

function paginateText(text, wordsPerPage) {
  const words = text.trim().split(/\s+/);
  let chunks = [];
  for (let i = 0; i < words.length; i += wordsPerPage) {
    chunks.push(words.slice(i, i + wordsPerPage).join(" "));
  }
  return chunks;
}

function renderPage(index) {
  $('#book-content').text(pages[index]);
  $('#page-indicator').text(`Page ${index + 1} of ${pages.length}`);
  localStorage.setItem('currentPage', index); // auto-save progress
}

$(document).on("pagecreate", "#reader", function () {
  pages = paginateText(bookText, wordsPerPage);

  let saved = localStorage.getItem("bookmarkPage");
  let savedCurrent = localStorage.getItem("currentPage");

  currentPage = savedCurrent ? parseInt(savedCurrent) : 0;
  renderPage(currentPage);

  $('#nextPage').click(() => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  $('#prevPage').click(() => {
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  $('#bookmark').click(() => {
    localStorage.setItem("bookmarkPage", currentPage);
    alert(`Bookmarked page ${currentPage + 1}!`);
  });
});

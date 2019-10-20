var cardController = (function() {
  var Card = function(id, imgSrc, category, title, author) {
    (this.id = id),
      (this.imgSrc = imgSrc),
      (this.category = category),
      (this.title = title),
      (this.author = author);
  };

  var cardList = []; // list of card
  return {
    addCard: function(imgSrc, category, title, author) {
      let ID;
      if (cardList.length > 0) {
        ID = cardList[cardList.length - 1].id + 1;
      } else ID = 0;
      let cardItem = new Card(ID, imgSrc, category, title, author);

      //push card to card list
      cardList.push(cardItem);

      //return new element
      return cardItem;
    },
    getCardList: function() {
      return cardList;
    }
  };
})();

var UIController = (function() {
  let DOMString = {
    rootCard: "cards__root"
  };

  return {
    getDOMString: function() {
      return DOMString;
    },
    addCardList: function(cardObj) {
      let htmlText = `
      <div class="cardContainer inactive" id="card__%id%">
      <div class="card">
        <div class="side front">
          <div class="img img1" style="background-image: url(%Src%)"></div>
          <div class="info">
            <div class="card--category">%category%</div>
            <p class="card--author">រៀបរៀងដោយៈ <br>%author%</p>
          </div>
        </div>
        <div class="side back">
          <div class="info">
            <div class="card--category">%category%</div>
            <div class="reviews">
              <svg
                fill="#FFC324"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <svg
                fill="#FFC324"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <svg
                fill="#FFC324"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <svg
                fill="#FFC324"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <svg
                fill="#FFC324"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs><path d="M0 0h24v24H0V0z" id="a" /></defs>
                <clipPath id="b">
                  <use overflow="visible" xlink:href="#a" />
                </clipPath>
                <path
                  clip-path="url(#b)"
                  d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                />
              </svg>
              <p>23 Reviews</p>
            </div>
            <p>%title%</p>
            <div class="btn">
              <h4>អានបន្ថែម</h4>
              <svg
                fill="#333"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                <path d="M0-.25h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      let newHtml = htmlText.replace("%id%", cardObj.id);
      newHtml = newHtml.replace(new RegExp("%Src%", "g"), cardObj.imgSrc);
      newHtml = newHtml.replace(
        new RegExp("%category%", "g"),
        cardObj.category
      );
      newHtml = newHtml.replace("%title%", cardObj.title);
      newHtml = newHtml.replace("%author%", cardObj.author);
      document
        .getElementById(DOMString.rootCard)
        .insertAdjacentHTML("beforeend", newHtml);
    }
  };
})();

var globalController = (function(cardCtrl, UICtrl) {
  var DOM = UICtrl.getDOMString();
  var setupEventListener = function() {
    document
      .getElementById(DOM.rootCard)
      .addEventListener("click", function(event) {
        let itemID =
          event.target.parentNode.parentNode.parentNode.parentNode.parentNode
            .id;
        let card = event.target.parentNode.parentNode.parentNode.parentNode;
        let CardID =
          event.target.parentNode.parentNode.parentNode.parentNode.id;
        let cardClass = event.target.parentNode.parentNode.parentNode;
        console.log(card, itemID);
        if (card.classList.contains("active")) {
          splitID = itemID.split("__");
        } else if (cardClass.classList.contains("active")) {
          splitID = CardID.split("__");
        }
        ID = splitID[1];
        if (ID !== "" && !isNaN(ID)) {
          // Set ID to URL
          location.href = "./contentView.html?" + ID;
        }
      });
  };
  var addCard = function() {
    /*ល្ខោនខោល */

    // 1. add card to list
    let cardItem = cardCtrl.addCard(
      `./images/lakhon-khol.jpg`,
      "ល្ខោនខោល",
      "ល្ខោនខោល ឬ ល្ខោនពាក់របាំងមុខ គឺជាល្ខោនមួយដែលមានលក្ខណៈចំណាស់របស់កម្ពុជា...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនបាសាក់ */

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/basac.jpg`,
      "ល្ខោនបាសាក់",
      "ល្ខោន​បាសាក់​មាន​ដើម​កំណើត​នៅ​ស្រុក​បាសាក់​ខេត្ត​ឃ្លាំង​ទល់​មុខ​ព្រះ​ត្រពាំង​កម្ពុជា​ក្រោម...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនស្រមោលស្បែកធំ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/sbek__thom.jpg`,
      "ល្ខោនស្រមោលស្បែកធំ",
      "ល្ខោនស្បែកធំ គឺជាល្ខោនដែលមានវ័យចំណាស់បំផុត ក្នុងប្រទេសកម្ពុជាដែលអាចជាសំណល់ ពីសម័យបុរាណ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនស្រមោលស្បែកតូច*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/sbek__touch.jpg`,
      "ល្ខោនស្រមោលស្បែកតូច",
      "ល្ខោនស្បែកតូច ត្រូវបានគេស្គាល់ក្នុងភូមិកំពង់តាយ៉ុង ខេត្តសៀមរាប។ តុក្កតាធ្វើពីស្បែកសត្វស្លាប់ ដៃនិងជើងអាចធ្វើចលនា...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនសមហោរី*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/MoHory.jpg`,
      "ល្ខោនមហោរី",
      "ល្ខោនមហោរី គឺជាសិល្បៈចំណាស់ និងជាទម្រង់នៃរបាំ ដែលបានបង្កើតនៅក្នុងឆ្នាំ១៩៦០ ដោយ ផ្អែកទៅលើចម្រៀងមហោរី ការរាំ និងការនិយាយគ្នា។",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនយីកេ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/Yii-Ke.jpg`,
      "ល្ខោនយីកេ",
      "យីកេ គឺជា ទម្រង់នៃប្រភេទ តន្រ្តីផង ល្ខោនផង ព្រមទាំង ជា របាំផង...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោនពោលស្រី*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/PolSrey.jpg`,
      "ល្ខោនពោលស្រី",
      " ល្ខោនពោលស្រីជាកូនបង្កើតល្ខោនព្រះរាជទ្រព្យ ល្ខោនពោលស្រី គឺជាទម្រង់ល្ខោនច្រៀងរាំបុរាណមួយដែលមានលក្ខណៈស្រដៀងគ្នានឹងសិល្បៈល្ខោនក្បាច់បុរាណដែរ...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);

    /*ល្ខោននិយាយ*/

    // 1. add card to list
    cardItem = cardCtrl.addCard(
      `./images/Niyey.jpg`,
      "ល្ខោននិយាយ",
      " ល្ខោននិយាយជាល្ខោនបែបទំនើបមួយដែលផ្ដោតលើទេពកោសល្យក្នុងការប្រើប្រាស់ពាក្យសម្ដីឆ្លើយឆ្លង...",
      "ក្រសួងវប្បធម៌ និង វិចិត្រសិល្បៈ"
    );
    // 2. add card to UI
    UICtrl.addCardList(cardItem);
  };
  return {
    init: function() {
      addCard();
      setupEventListener();
    }
  };
})(cardController, UIController);

globalController.init();

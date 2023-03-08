const pages = document.querySelectorAll(".page");
const imageContainer = document.querySelector('.main-content-image-container');
const cahngeViewInner = document.querySelector('.change-view-inner');
const imageView = document.querySelector('.image-view');
const videoView = document.querySelector('.video-view');
const translateAmount = 100; 
let translate = 0;

// imageContainer.addEventListener('click', function(){
//   videoView.classList.remove('lost')
//   imageView.classList.add('lost')
//   imageContainer.classList.add('flip')
//   cahngeViewInner.classList.add('flip')
// })

// var cards = document.querySelectorAll('.kid');
// let imageToPress = document.getElementById('image-to-press');
// let faceFront = document.querySelector('.kid__face--front');
// let faceBack = document.querySelector('.kid__face--back');

// [...cards].forEach((card)=>{
//   imageToPress.addEventListener('click', function(){
//     faceFront.classList.add('lost')
//     faceBack.classList.remove('lost')
//     card.classList.toggle('kid-flipped');
//   })
//   faceBack.addEventListener('click', function(){
//     faceBack.classList.add('lost')
//     faceFront.classList.remove('lost')
//     card.classList.toggle('kid-flipped');
//   })
// });


// ====================================================================================================//

// let parseText = function(text, limit){
//   if (text.length > limit){
//       for (let i = limit; i > 0; i--){
//           if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
//               return text.substring(0, i) + '...';
//           }
//       }
//        return text.substring(0, limit) + '...';
//   }
//   else
//       return text;
// };

// MAIN TEXT CONTENT
// let readMoreOnPage1 = document.createElement('span');
// readMoreOnPage1.textContent = 'Read More on page 1'
// readMoreOnPage1.className = 'read-more';
// readMoreOnPage1.id = 'pages-page-1';

// console.log(readMoreOnPage1)
// const mainTextContent = document.getElementById('main-text-content');
// const hiddenMainTextContent = document.getElementById('hidden-main-text-content');
// mainTextContent.style = `font-size: .79rem; display: -webkit-box;display: -ms-flexbox;display: flex;flex-direction: column;padding: 0 0.41rem;`;

// hiddenMainTextContent.innerHTML = `
// <p>
// The Maasai have had a long tradition of large families sustaining large herds of cattle. This tradition became a challenge for Maasai families when formal education became nationally mandatory for all Kenyan citizens in 2002. Though initially free, within ten years, school fees were instated to cover the cost of needed buildings, teachers, textbooks, and in many cases, food. This meant the selling off of precious cattle to cover these fees. Since 2009, environmental and policy disasters have killed most Rombo Maasai cattle. Aside from the initial forced relocation of the Maasai of Rombo to a narrow portion of their initial Maasai lands to form the Tsavo West Animal Reserve, the droughts of 2007-9 and 2020 – present, and loss of land due to formalized land ownership resulting in the devastating cattle death experienced by most famil. As a result, parents struggle to eat, let alone pay school fees. Many try valiantly. When it rains, they go against their tradition and work the land as poorly paid day laborers on local farms. But there has been insufficient rain for three years. Extreme deforestation is occurring as parents cut trees to sell for firewood. But school fees have been an impossible challenge for most families to bear. 
// </p> 
// <p>
// To add to this challenge, the cost of secondary (high) school is ten to twenty times the cost of primary school. As children age, more children enter into more costly schooling. To add to this struggle, beginning this year, Kenya has created the category of “Junior Secondary” (middle school), which shifts these grades from primary to secondary school and related costs. 
// </p>
// <p>
// Daily, parents come to the PMD/ADEA office to ask for help for their children sent home from school or for children unable even to begin their secondary studies. The majority of the 130 we currently support come to us with this challenge. Seeing that the need for school fee support will quickly expand to over a thousand, the ADEA Foundation has decided to begin a formal student sponsorship program in line with several other programs offered by many large charitable organizations. The uniqueness of our offing versus other global organizations is our ability to give donors a chance to get to know the community. With the aim to help children thrive in school, financial support will uplift children, families, and the community through programming that impact student performance beyond the classroom. 
// </p>
// <p>
// In the months ahead, ADEA will formalize our KKIS (Keep Kids in School) Sponsorship program. In the meantime, if you would like to help support one of the 130 children we currently support before we can provide photos and facts. 
// We welcome your gift of $360 for the duration of this year – or a contribution of any amount.
// </p>
// `

// let maxText = 250;
// var wordsInPost = wordCount(document.querySelectorAll(".hidden-main-text-content"));

// function wordCount(words) {
//   var count = 0
//   for (var i = 0; i < words.length; i++) {
//     count += words[i].textContent.split(" ").length
//   }
//   return count
// }

// console.log(wordsInPost)


// if(wordsInPost > maxText){
//   mainTextContent.style = `font-size: .79rem; display: -webkit-box;display: -ms-flexbox;display: flex;flex-direction: column;padding: 0 0.41rem;`;
// mainTextContent.innerHTML = parseText(hiddenMainTextContent.textContent, 1150);
// mainTextContent.appendChild(readMoreOnPage1)
// }else{
//   mainTextContent.innerHTML = hiddenMainTextContent.textContent;
//   mainTextContent.removeChild(readMoreOnPage1)
// }


// console.log(parseText(hiddenMainTextContent.innerText, 70))


window.addEventListener('load', ()=>{
   let loader = document.querySelector('.loading');
   loader.classList.add('lost')
})



// Function to count all characters in a given div
function wordCount(words) {
  var count = 0
  for (var i = 0; i < words.length; i++) {
    count += words[i].textContent.split(" ").length
  }
  return count
}

// Function to truncate texts 
function parseText(text, limit){
  if (text.length > limit){
      for (let i = limit; i > 0; i--){
          if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
              return text.substring(0, i) + '...';
          }
      }
       return text.substring(0, limit) + '...';
  }
  else
      return text;
};



// ===========================================//
   //==     SECOND CONTENT ON LEFT TOP       
//============================================//
let firstContentToLinkPage8Div = document.getElementById('link-to-page-8');
let firstContentToLinkPage8Content = `
<label for="page-8">
<div class="big-d-head">
<img src='./media/images/spiritual.jpg'>
</div>
</div>
</label>
`;
{/* <div class="big-d-p">Isaiah 58: 6-12</div> */}


firstContentToLinkPage8Div.innerHTML = firstContentToLinkPage8Content;

// variable to select all text from link to page 8
let linkToPage8Chars = wordCount(document.getElementsByClassName('link-to-page-8'));
let linkToPage8MaxCount = 1;

console.log(wordCount(document.getElementsByClassName('link-to-page-8')))

if(linkToPage8Chars > linkToPage8MaxCount){
firstContentToLinkPage8Div.innerHTML = parseText(firstContentToLinkPage8Content, 2000);
console.log(`link to page 8 part has ${linkToPage8Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}


// ===========================================//
   //==     FOURTH CONTENT ON LEFT      
//============================================//
let firstContentToLinkPage4Div = document.getElementById('bottom-notch-1-header');

let bottomNotch1Header = document.getElementById('page4-header');
let bottomNotch1Content = document.getElementById('page4-content');

const bottomNotch1pTag = document.createElement('div')
const bottomNotch1pagePtag = document.createElement('div')
bottomNotch1pTag.textContent = 'Two students walk tall wearing one sock each!';
bottomNotch1pagePtag.textContent = 'Two Students walk tall with one sock each. ';
bottomNotch1pTag.className = 'header-notch';
firstContentToLinkPage4Div.appendChild(bottomNotch1pTag)
bottomNotch1Header.appendChild(bottomNotch1pagePtag)

let firstContentToLinkPage4Header = firstContentToLinkPage4Div.innerHTML;

const readMoreOnPage4 = document.createElement('div');
const readMoreOnPage4Label = document.createElement('label');
readMoreOnPage4.className = 'read-more';
readMoreOnPage4.id = 'pages-page-4';
readMoreOnPage4Label.setAttribute('for','page-4');
readMoreOnPage4Label.textContent = 'read more on page 4';

readMoreOnPage4.appendChild(readMoreOnPage4Label);

firstContentToLinkPage4Div.innerHTML = bottomNotch1Header;

let firstContentToLinkPage4Content = `

<p>
As a result of our conversations around shaming at our mid-term KKIS student workshops, Form 3 student John Saitoti acted upon a de-shaming tactic proposed in our workshop. He noticed a fellow classmate who hesitated to leave the classroom for fear of the mocking he would receive for not having sox. John approached the boy and proposed that they each wear one of his sox and walk confidently out of the class. The boy accepted the offer, and together, wearing one sock each, they left the classroom am were met with looks of surprise and playful laughter, believing that the boys were playing a game and merely looking for attention. The next day John gave his only other pair of sox to his new friend, modeling compassion, sacrifice, and creativity.
</p>
<p>
[This is just one of an increasing number of events where KKIS-sponsored students are challenging the prevalent traditions of shaming the less fortunate but uplifting them. 
They are being the salt and light of their world. Stay tuned for more. ]
Male student gives one sock to classmate. 
</p>

`;

bottomNotch1Content.innerHTML = firstContentToLinkPage4Content;

// variable to select all text from link to page 4
let linkToPage4Chars = wordCount(document.getElementsByClassName('bottom-notch-1'));
let linkToPage4MaxCount = 0;

if(linkToPage4Chars > linkToPage4MaxCount){
firstContentToLinkPage4Div.innerHTML = parseText(firstContentToLinkPage4Header, 200);
firstContentToLinkPage4Div.appendChild(readMoreOnPage4);
console.log(`link to page 5 part has ${linkToPage4Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}




// ===========================================//
   //==     FIFTH CONTENT ON LEFT      
//============================================//
let firstContentToLinkPage5Div = document.getElementById('bottom-notch-2-header');

let bottomNotch2Header = document.getElementById('page5-header');
let bottomNotch2Content = document.getElementById('page5-content');

const bottomNotch2pTag = document.createElement('div')
const bottomNotch2pagePtag = document.createElement('div')
bottomNotch2pTag.textContent = 'Parents humbled seeing  their children practicing shaming learned at home.';
bottomNotch2pagePtag.textContent = 'Parents humbled seeing  their children practicing shaming learned at home.';
bottomNotch2pTag.className = 'header-notch';
firstContentToLinkPage5Div.appendChild(bottomNotch2pTag)
bottomNotch2Header.appendChild(bottomNotch2pagePtag)

let firstContentToLinkPage5Header = firstContentToLinkPage5Div.innerHTML;

const readMoreOnPage5 = document.createElement('div');
const readMoreOnPage5Label = document.createElement('label');
readMoreOnPage5.className = 'read-more';
readMoreOnPage5.id = 'pages-page-5';
readMoreOnPage5Label.setAttribute('for','page-5');
readMoreOnPage5Label.textContent = 'read more on page 5';

readMoreOnPage5.appendChild(readMoreOnPage5Label);

firstContentToLinkPage5Div.innerHTML = bottomNotch2Header;

let firstContentToLinkPage5Content = `

<p>
Last month fifty members of the twenty-five primary school Parent Teachers Association (PTA) leadership were invited to a workshop coordinated by ADEA and PMD. In Kenya, a local PTA body made up of community members with children in school technically governs the schools. Their intended responsibilities are to oversee the local schools and approve any fees and school activities. It is they who decide if a school is to hire additional local teachers when the provided government teachers are insufficient for the number of students, if food is to be provided, and any school fees that may be required to apply these decisions. In the Rombo Group Ranch, where ADEA works, most PTA parents have never attended school and only speak the Maasai language.
</p>

<p>
The government assigns head teachers of the rural primary schools from other parts of the country.  In most cases, these head teachers push their plans and agendas (including introducing activities requiring fees). They frequently obtain PTA approval by intimidating and shaming the members, reminding them of being illiterate, uneducated, and so poor they can hardly care for their children.  In our training, we help local PTA members to understand their responsibilities and duties as members and to beware of the head teachers' tricks to falsely represent their authority, using English in meetings and shaming to achieve their agenda.
</p>

<p>
In these meetings, the PTA members shared their challenges with their school head teachers and the shaming they and the children are experiencing from the Head Teacher. This led to a broader conversation about the prevalence of shaming within the local culture of Rombo.  Many shared their own experience of being shamed by neighbors when they became poorer due to cattle loss and other struggles.  We then shared our student video on shaming and what the children were experiencing in school.  After the viewing, they were silent, many with heads lowered. "Our children are practicing what we do to them on others," one parent noted, and others agreed.  It was a revolutionary moment when parents saw the bad fruit of their shaming practices to their children being served to classmates.
</p>
<p>
We are committed to breaking the destructive patterns of shaming in Rombo. Already, we see it beginning to break as children and parents are becoming aware of the pain of shaming and their desire to try a kinder way.
</p>

`;

bottomNotch2Content.innerHTML = firstContentToLinkPage5Content;

// variable to select all text from link to page 4
let linkToPage5Chars = wordCount(document.getElementsByClassName('bottom-notch-2'));
let linkToPage5MaxCount = 0;

if(linkToPage5Chars > linkToPage5MaxCount){
firstContentToLinkPage5Div.innerHTML = parseText(firstContentToLinkPage5Header, 200);
firstContentToLinkPage5Div.appendChild(readMoreOnPage5);
console.log(`link to page 5 part has ${linkToPage5Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}



// ===========================================//
   //==     MAIN CONTENT      
//============================================//
let mainContentHeading = document.getElementById('major-artical-heading');
let mainContentDiv = document.getElementById('main-text-content');

let page1Header = document.getElementById('page1-header');
let page1Content = document.getElementById('page1-content');

const pTag = document.createElement('p')
const pagePtag = document.createElement('p')
pTag.textContent = 'Hundreds of families request support for school fees';
pagePtag.textContent = 'Hundreds of families request support for school fees';
mainContentHeading.appendChild(pTag)
page1Header.appendChild(pagePtag)
let mainContentContent = `
<p>
The Maasai have had a long tradition of large families sustaining large herds of cattle. This tradition became a challenge for Maasai families when formal education became nationally mandatory for all Kenyan citizens in 2002. Though initially free, within ten years, school fees were instated to cover the cost of needed buildings, teachers, textbooks, and in many cases, food. This meant the selling off of precious cattle to cover these fees. Since 2009, environmental and policy disasters have killed most Rombo Maasai cattle. Aside from the initial forced relocation of the Maasai of Rombo to a narrow portion of their initial Maasai lands to form the Tsavo West Animal Reserve, the droughts of 2007-9 and 2020 – present, and loss of land due to formalized land ownership resulting in the devastating cattle death experienced by most famil. As a result, parents struggle to eat, let alone pay school fees. Many try valiantly. When it rains, they go against their tradition and work the land as poorly paid day laborers on local farms. But there has been insufficient rain for three years. Extreme deforestation is occurring as parents cut trees to sell for firewood. But school fees have been an impossible challenge for most families to bear. 
To add to this challenge, the cost of secondary (high) school is ten to twenty times the cost of primary school. As children age, more children enter into more costly schooling. To add to this struggle, beginning this year, Kenya has created the category of “Junior Secondary” (middle school), which shifts these grades from primary to secondary school and related costs. 
</p>
<p>
Daily, parents come to the PMD/ADEA office to ask for help for their children sent home from school or for children unable even to begin their secondary studies. The majority of the 130 we currently support come to us with this challenge. Seeing that the need for school fee support will quickly expand to over a thousand, the ADEA Foundation has decided to begin a formal student sponsorship program in line with several other programs offered by many large charitable organizations. The uniqueness of our offing versus other global organizations is our ability to give donors a chance to get to know the community. With the aim to help children thrive in school, financial support will uplift children, families, and the community through programming that impact student performance beyond the classroom. 
</p>
<p>
In the months ahead, ADEA will formalize our KKIS (Keep Kids in School) Sponsorship program. In the meantime, if you would like to help support one of the 130 children we currently support before we can provide photos and facts. 
We welcome your gift of $360 for the duration of this year – or a contribution of any amount.
</p>
`;

page1Content.innerHTML = mainContentContent;

const readMoreOnPage1 = document.createElement('div');
const readMoreOnPage1Label = document.createElement('label');
readMoreOnPage1.className = 'read-more';
readMoreOnPage1.id = 'pages-page-1';
readMoreOnPage1Label.setAttribute('for','page-1');
readMoreOnPage1Label.textContent = 'read more on page 1';

readMoreOnPage1.appendChild(readMoreOnPage1Label);

mainContentDiv.innerHTML = mainContentContent;

// variable to select all text from link to page 4
let linkToPage1Chars = wordCount(document.getElementsByClassName('text-content'));
let linkToPage1MaxCount = 0;

if(linkToPage1Chars > linkToPage1MaxCount){
mainContentDiv.innerHTML = parseText(mainContentContent, 1050);
mainContentDiv.appendChild(readMoreOnPage1);
console.log(`link to page 1 part has ${linkToPage1Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}



// ===========================================//
   //==     TOP LEFT CONTENT      
//============================================//
let mainTopLeftContentHeading = document.getElementById('link-to-page-7-heading');
let mainTopLeftContentDiv = document.getElementById('link-to-page-7-content');

let page7Header = document.getElementById('page7-header');
let page7Content = document.getElementById('page7-content');

const pTagPage7 = document.createElement('div')
const pagePtag7 = document.createElement('div')
pTagPage7.textContent = 'Maasai woman eats eggs at 65 for the first time';
pagePtag7.textContent = 'Maasai woman eats eggs at 65 for the first time';
pTagPage7.className = 'topleft-header';
mainTopLeftContentHeading.appendChild(pTagPage7)
page7Header.appendChild(pagePtag7)
let mainTopLeftContentContent = `
<p>
During a bead workers’ breakfast hosted by ADEA and PMD, 65-year-old Leah Motialo admitted to having eaten eggs for the first time that morning.  Eggs, that were cooked flat, resembling an unfolded omelet or chapati (local flat bread), were served along with tea, bread, avocado slices, and mangos.   It seems that, per local dietary tradition, Maasai would never eat eggs, chicken, fish, pork, wild animals or any animal-based food other than beef, mutton, and goat.  With the devastating loss of cattle over the past decades has opened many Maasai of Rombo, Kenya to other foods.  However, many older Maasai hold on to traditional diet as best best they can.   Leah explained that, “I avoided eating eggs for fear they would cause me to vomit”, but because she saw several of her friends enjoying the eggs, and especially becuase these eggs has been prepared in a way that resampled chapati flat bread, she decided to give it a try.   And she was glad she did.
</p>
<p>
To other women in the group of eight restrained from trying eggs for the fear they would vomit and spoil the gathering.
</p>
`;

page7Content.innerHTML = mainTopLeftContentContent;
page7Header.innerHTML = pTagPage7.innerHTML

const readMoreOnPage7 = document.createElement('div');
const readMoreOnPage7Label = document.createElement('label');
readMoreOnPage7.className = 'read-more';
readMoreOnPage7.id = 'pages-page-7';
readMoreOnPage7Label.setAttribute('for','page-7');
readMoreOnPage7Label.textContent = 'read more on page 7';

readMoreOnPage7.appendChild(readMoreOnPage7Label);

mainTopLeftContentDiv.innerHTML = mainTopLeftContentContent;

// variable to select all text from link to page 4
let linkToPage7Chars = wordCount(document.getElementsByClassName('text-content'));
let linkToPage7MaxCount = 0;

if(linkToPage7Chars > linkToPage7MaxCount){
mainTopLeftContentDiv.innerHTML = parseText(mainTopLeftContentContent, 105);
mainTopLeftContentDiv.appendChild(readMoreOnPage7);
console.log(`link to page 1 part has ${linkToPage7Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}



// ===========================================//
   //==     MAIN CONTENT BELOW TOP VIDEO/IMAGE     
//============================================//
let linkToPage2Heading = document.getElementById('link-to-page-2-header');
let linkToPage2MainContentDiv = document.getElementById('link-to-page-2-content');

let page2Header = document.getElementById('page2-header');
let page2Content = document.getElementById('page2-content');

const linkToPage2PTag = document.createElement('div')
const pagelinkToPage2Ptag = document.createElement('div')
linkToPage2PTag.className = 'link-to-page2-header';
linkToPage2PTag.textContent = 'KKIS Beadwork: Parents empowered when producing beadwork';
pagelinkToPage2Ptag.textContent = 'KKIS Beadwork: Parents empowered when producing beadwork';
linkToPage2Heading.appendChild(linkToPage2PTag)
page2Header.appendChild(pagelinkToPage2Ptag)
let linkToPage2MainContentContent = `
<p>
Afforded by the cattle wealth of their husbands (and a diet of milk, meat, and blood – for which the men did the slaughtering and cooking), Maasai women enjoyed considerable leisure time for beadwork while their children took care of the home and milk the cows. The Maasai women have a long tradition of producing colorful high-quality beaded pieces for their husbands, children, and themselves. Now, without financial means, women can no longer afford the needed beads, and the craft is beginning to die.
</p>  
 
<p>
When ADEA began supporting larger numbers of students, the idea was proposed to have families produce beaded pieces in exchange for school fees. However, family members had various beading experiences, from conservable to none. A team of master beaders was formed to teach, guide and maintain the quality of the selected four designs. The women split the week to ensure that someone is in our office to meet and work with the beading family members (in some cases, men, who are said to be faster producers). The response of the participants has been very positive. Not only are they learning to be master bead workers, they also sense the pride that they have a part in ensuring their children remain in school. They are enjoying the joy of their children no longer repeatedly returning home during the term and the emotional pain they and the children experience. 
</p>
 
<p>
As a large group of master bead workers emerges, ADEA will explore market opportunities for beaded products. 
</p>
 
 <p>
ADEA intends to use the produced pieces to promote the upcoming Keep Kids in School Child Sponsorship initiative. They will be given as gifts to current and interested sponsors. The ADEA Director, Douglas McFalls, also hopes to decorate Christmas trees in prominent places (Symphony Halls or theatres) to attract donors.
</p>
`;

page2Content.innerHTML = linkToPage2MainContentContent;

const readMoreOnPage2 = document.createElement('div');
const readMoreOnPage2Label = document.createElement('label');
readMoreOnPage2.className = 'read-more';
readMoreOnPage2.id = 'pages-page-2';
readMoreOnPage2Label.setAttribute('for','page-2');
readMoreOnPage2Label.textContent = 'read more on page 2';

readMoreOnPage2.appendChild(readMoreOnPage2Label);

linkToPage2MainContentDiv.innerHTML = linkToPage2MainContentContent;

// variable to select all text from link to page 4
let linkToPage2Chars = wordCount(document.getElementsByClassName('link-to-page-2-content'));
let linkToPage2MaxCount = 0;

if(linkToPage2Chars > linkToPage2MaxCount){
linkToPage2MainContentDiv.innerHTML = parseText(linkToPage2MainContentContent, 330);
linkToPage2MainContentDiv.appendChild(readMoreOnPage2);
console.log(`link to page 1 part has ${linkToPage2Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}


// ===========================================//
   //==    PAGE 3 NEAR TOP IMAGE/VIDEO    
//============================================//

const countTitleChars = wordCount(document.getElementsByClassName('center-divs-head'));
let maxCountTitleChar = 0;

const centerDivHeader = document.getElementById('center-divs-head');
const centerDivImage = document.getElementById('image-to-press');
const afterImageReadMore = document.querySelector('.after-image-read-more');

const page3Header = document.getElementById('page3-header')
const page3Content = document.getElementById('page3-content')

const headerText = `ADEA Director Awarded staff of honor.`
const headerContent3 = `
<p>
A traditional Maasai way of expressing honor to a person who plays a leadership role and contributes to a community is to present them with a beaded staff to be carried with distinction by the recipient. On February 25, the nine women leaders of our Keep Kids in School beadwork initiative presented such a staff to ADEA Foundation director Douglas McFalls, for this current initiative which has brought work, dignity, and community connectivity. Douglas has been working with several of these women for decades in partnership with the local community-based organization Pillar of Maasai Development. In 2005 Douglas received a similar staff in appreciation for the establishment of the Lemong’o Boma Primary School.
</p>
<p><img src='./media/images/douglas.png'></p>
`;

const makeImage = document.createElement('img');
makeImage.src = './media/images/douglas.png';

page3Header.innerHTML = headerText;
page3Content.innerHTML = headerContent3;

if(countTitleChars > maxCountTitleChar){
centerDivHeader.innerHTML = parseText(headerText, 200);
}

centerDivImage.appendChild(makeImage);



// ===========================================//
   //==    PAGE 6 NEAR BOTTOM IMAGE/VIDEO    
//============================================//
let linkToPage6Heading = document.getElementById('link-to-page-6-header');
let linkToPage6MainContentDiv = document.getElementById('link-to-page-6-content');

let page6Header = document.getElementById('page6-header');
let page6Content = document.getElementById('page6-content');

const linkToPage6PTag = document.createElement('div')
const pagelinkToPage6Ptag = document.createElement('div')
linkToPage6PTag.className = 'link-to-page6-header';
linkToPage6PTag.textContent = 'KKIS combats destructive patterns of shaming.';
pagelinkToPage6Ptag.textContent = 'KKIS combats destructive patterns of shaming.';
linkToPage6Heading.appendChild(linkToPage6PTag)
page6Header.appendChild(pagelinkToPage6Ptag)
let linkToPage6MainContentContent = `
<p>
The aim of KKIS is to not only keep children in school but also help them to thrive in school. Tragically, the Maasai traditional culture and current community culture are full of shaming. At our inter-term KKIS workshops, we address the prevalence and pain of shaming in Rombo. Students share stories of mockery from fellow students and community members for many reasons: not having socks, beading during menstruation, arriving late to school lunch and no food remains, having torn or old uniforms, having dirty hair, being weak from hunger, and so many more instances.   It is often the poorest children who suffer the greatest frequency of shaming. We remind them that they are some of the neediest students, and only because of the kindness of donors overseas do they have the peace and privilege of studying without fear of school fees. But more critical than that, we reminded them that many profess to be Christians and acknowledge Christ is their savior and friend.  
</p>
<p>
Jesus asks us to be His hands and feet of love. We are called to be the salt and light of the world, a reflection of His kindness. We are to preserve and encourage others and not judge or dishearten them. Jesus calls us to the joy of compassion and generosity, even when we don’t have enough ourselves. We are to “look not only our own interests but also the interest of others.” 
</p>
<p>
It has been more than encouraging and inspiring to hear the reports of our KKIS students responding with care, defense, and provision to others who are being shamed that classmates and teachers are taking notice.   I am so thrilled and touched. Our KKIS students have asked to create no-shaming workshops to present at their schools.   KKIS sponsorships are resulting in transformations beyond merely school fees.
</p>
`;
linkToPage6Heading.innerHTML = linkToPage6PTag.innerHTML;

const readMoreOnPage6 = document.createElement('div');
const readMoreOnPage6Label = document.createElement('label');
readMoreOnPage6.className = 'read-more';
readMoreOnPage6.id = 'pages-page-6';
readMoreOnPage6Label.setAttribute('for','page-6');
readMoreOnPage6Label.textContent = 'read more on page 6';

readMoreOnPage6.appendChild(readMoreOnPage6Label);

page6Content.innerHTML = linkToPage6MainContentContent;

let linkToPage6Chars = wordCount(document.getElementsByClassName('link-to-page-6-content'));
let linkToPage6MaxCount = 0;

if(linkToPage6Chars > linkToPage6MaxCount){
linkToPage6MainContentDiv.innerHTML = parseText(linkToPage6MainContentContent, 380);
linkToPage6MainContentDiv.appendChild(readMoreOnPage6);
console.log(`link to page 6 part has ${linkToPage6Chars} characters (FIRST CONTENT ON LEFT TOP )`)
}













class MoreLinks {
  constructor(link, id) {
    this.link = link;
    this.id = id;
  }
}

let myLink = document.createElement('a');
let myLink2 = document.createElement('a');
let myLink3 = document.createElement('a');
let myLink4 = document.createElement('a');
let myLink5 = document.createElement('a');
let myLink6 = document.createElement('a');

let id1 = 'link1';
let id2 = 'link2';
let id3 = 'link3';
let id4 = 'link4';
let id5 = 'link5';
let id6 = 'link6';

const firstLink = new MoreLinks(`ADEA proposes first annual English Language Camp to provide a “vacation with a
purpose” for the week of August 20, 2023`, `${id1}`);
const secondLink = new MoreLinks(`So they graduate from high school, and then what?`, `${id2}`);
const thirdLink = new MoreLinks(`ADEA Director travels to Kenya to strategize 2023+ with PMD team`, `${id3}`);
const fourthLink = new MoreLinks(`FIX IT Uniform Strengthening and Repair Workshops schedule for June 2023.`, `${id4}`);
const fifthLink = new MoreLinks(`Artifacts: PMD collects artifacts and their related stories as families are relocated and
traditional culture is abandoned.`, `${id5}`);
const sixthLink = new MoreLinks(`ADEA/PMD considers “union” to protect the locally hired teacher.`, `${id6}`);

myLink.id = firstLink.id;
myLink.innerText = firstLink.link;

myLink2.id = secondLink.id;
myLink2.innerText = secondLink.link;

myLink3.id = thirdLink.id;
myLink3.innerText = thirdLink.link;

myLink4.id = fourthLink.id;
myLink4.innerText = fourthLink.link;

myLink5.id = fifthLink.id;
myLink5.innerText = fifthLink.link;

myLink6.id = sixthLink.id;
myLink6.innerText = sixthLink.link;

document.getElementById("demo").appendChild(myLink2)
document.getElementById("demo").appendChild(myLink)
document.getElementById("demo").appendChild(myLink3)
document.getElementById("demo").appendChild(myLink4)
document.getElementById("demo").appendChild(myLink5)
document.getElementById("demo").appendChild(myLink6)


document.getElementById(id1).addEventListener('click', ()=>{
   console.log(`${id1} clicked`)
   showLink_1();
})
document.getElementById(id2).addEventListener('click', ()=>{
   console.log(`${id2} clicked`)
   showLink_2();
})
document.getElementById(id3).addEventListener('click', ()=>{
   console.log(`${id3} clicked`)
   showLink_3();
})
document.getElementById(id4).addEventListener('click', ()=>{
   console.log(`${id4} clicked`)
   showLink_4();
})
document.getElementById(id5).addEventListener('click', ()=>{
   console.log(`${id5} clicked`)
   showLink_5();
})
document.getElementById(id6).addEventListener('click', ()=>{
   console.log(`${id6} clicked`)
   showLink_6();
})



let mainBody = document.createElement('div');

function showLink_1(){      
 document.getElementById("recommended_link_1").style.display="block";
mainBody.innerHTML = link1;
document.getElementById("recommended_link_1_body").append(mainBody);
}  

function showLink_2(){      
 document.getElementById("recommended_link_2").style.display="block";  
mainBody.innerHTML = link2;
document.getElementById("recommended_link_2_body").append(mainBody);    
}   

function showLink_3(){      
 document.getElementById("recommended_link_3").style.display="block";  
mainBody.innerHTML = link3;
document.getElementById("recommended_link_3_body").append(mainBody);    
}  

function showLink_4(){      
 document.getElementById("recommended_link_4").style.display="block";  
mainBody.innerHTML = link4;
document.getElementById("recommended_link_4_body").append(mainBody);    
}  

function showLink_5(){      
 document.getElementById("recommended_link_5").style.display="block";    
mainBody.innerHTML = link5;
document.getElementById("recommended_link_5_body").append(mainBody);  
}  

function showLink_6(){      
 document.getElementById("recommended_link_6").style.display="block";  
mainBody.innerHTML = link6;
document.getElementById("recommended_link_6_body").append(mainBody);    
}      




function hidePopup(){      
 document.getElementById("recommended_link_1").style.display="none";
document.getElementById("recommended_link_1_body").prepend(mainBody)

 document.getElementById("recommended_link_2").style.display="none"; 
document.getElementById("recommended_link_2_body").prepend(mainBody)

 document.getElementById("recommended_link_3").style.display="none";
document.getElementById("recommended_link_3_body").prepend(mainBody)

 document.getElementById("recommended_link_4").style.display="none"; 
document.getElementById("recommended_link_4_body").prepend(mainBody)

 document.getElementById("recommended_link_5").style.display="none"; 
document.getElementById("recommended_link_5_body").prepend(mainBody)

 document.getElementById("recommended_link_6").style.display="none"; 
document.getElementById("recommended_link_6_body").prepend(mainBody)     
}


const link1 = `
<div class="bold-content-header links-header"><div>ADEA proposes first annual English Language Camp to provide a “vacation with a
purpose” for the week of August 20, 2023</div></div>
<div class="links-content">

</div>
`










const link2 = `<div class="bold-content-header links-header"><div>So they graduate from high school, and then what?</div></div>
<div class="links-content">
<p>
As we seek support to help children remain in secondary school and earn their graduation
diplomas, I have been asked on a few occasions, “Then what?” This is a legitimate question,
one that I have asked myself. In truth, at this point, all I know is that the sense of completion
and having a school diploma means a great deal to children and parents who have never
attended school. Secondly, a Kenyan cannot apply for any sort of government job without a
high-school diploma. This certificate will remove one limitation from the many they will face.
We are considering adding a post-secondary school year for Computer, English, and Tailoring Training.
</p>
<p>
A Computer Center: I recently had a conversation with a Kenyan professional who came from a
poor background and explained that the high level of computer skills learned in secondary
school allowed him to find a job when he failed to find the money to remain in university. The
need for computer fluency will continue to expand throughout the world. In light of this, we are
exploring adding a post-secondary school year of studies focused on computer skills,
programming, typing, and related IT studies. As Africa has a smaller computer-skilled
workforce, there is a place for skills.
</p>
<p>
English Language Training: Growing up in an isolated corner of Kenya located on the border
with Tanzania, young men and women from the area find themselves fluent in no language:
neither English, Swahili, nor their native language Maa. With English as a national and global
language, fluency in it will open doors for these graduates. It will give them access to better
jobs (especially in the hospitality industry) and literature, and online learning opportunities.
Tailoring and Sewing:
For students with interest in sewing, tailoring, and fashion - we are considering a year of
sewing and tailoring along with English studies. The idea is to expose them to the highest level
of sewing and tailoring to give them an advantage in the sewing market. The first project will
be designing and fabricating a more durable school uniform.
</p>
</div>`

const link3 = `<div class="bold-content-header links-header"><div>ADEA Director travels to Kenya to strategize 2023+ with PMD team</div></div>
<div class="links-content">
<p>
Douglas McFalls, the ADEA Foundation director who has been working with the Maasai
community in Rombo, Kenya for twenty years, recently returned to the USA after an intensive
week spent in Rombo with the Pillar of Maasai (PMD) team. The focus of the visit was to be
sure the PMD office was in order, and to prepare for the KKIS child sponsorship program that
ADEA intends to launch before the end of 2023.
</p>
<p>
During the intensive week of work, he was encouraged by the educational improvement
experienced by the KKIS students we already support (the top three students in last years
gradution class at Colin Davies Secondary School were KKIS students. Teachers have reported
that KKIS students who are required to attend the English Language Club
</p>
</div>`;


const link4 = `
<div class="bold-content-header links-header"><div>FIX IT Uniform Strengthening and Repair Workshops schedule for June 2023.</div></div>
<div class="links-content">
<p>
The Maasai traditionally do not wear sewn clothes, but pieces of fabric (called shukas) sewing
or repairing clothes is not familiar to them. That, paired with the fact that School uniforms are
quickly made with the cheapest fabrics, results in students wearing damaged uniforms, and
damaged clothes result in costs for repair and replacement and shaming.
</p>
<p>
To address this issue, ADEA/PMD is launching a series of FIX IT workshops to help families
better care for and upkeep school uniforms. The workshops will be given to the KKIS students
and their caregivers/parents at different times. The children will meet after school, while the
parents will meet on weekends. The workshops will focus on three areas: Reinforcing:
identifying the most common places of damage (underarms, crotch, front pockets, and buttons)
and reinforcing them before they are ever worn. Repair: what stitches and other techniques
can best repair damaged uniforms, and Maintenance: the “stitch in time saves nine” approach.
</p>
<p>
Malei Wytcliff will teach the course. He is a local from Rombo currently studying fashion at
Kirinyaga University outside of Nairobi and partially supported by the ADEA Foundation. He will
attend our Mid-term KKIS student workshop to introduce the program and identify students
interested in sewing and tailoring. For the students, he will give three two-day workshops at
Colin Davies Secondary school, where most of our students attend. Students interested in
sewing as a professional pursuit will attend the first workshops. Malei will present the program
to them – after which they will evaluate his approach, make improvements, and prepare
samples and material for the larger student and parent classes. Each attendee will receive
thread, needles, and a small pair of scissors.
</p>
</div>


`
const link5 = `<div class="bold-content-header links-header"><div>Artifacts: PMD collects artifacts and their related stories as families are relocated and traditional culture is abandoned.</div></div>
<div class="links-content">

</div>`;


const link6 = `<div class="bold-content-header links-header"><div>ADEA/PMD considers “union” to protect the locally hired teacher.</div></div>
<div class="links-content">
<p>
Because the government of Kenya cannot currently afford to hire sufficient staff for all the
national schools, especially those in rural communities, the local community hires most
teachers in Rombo. Though many are fully certified teachers, they are paid five to nine times
less than the government teachers because they are paid for through school fees from the
impoverished local community.
</p>

<p>
Most government-assigned teachers and head teachers assigned to Rombo (and all rural areas
of Kenya) are not native to the regions. Their urban “more civilized” upbringings and large
salaries result in arrogance toward the local staff and disdain for the local rural setting and
humble school grounds (which are indeed challenging). Frequently, these attitudes result in
attitudes of superiority and shaming toward the local staff. Local staff, who are technically only
hired to teach, are commonly given tasks and extra responsibilities that are technically the
duties of the official government teachers. Local teachers have no official contracts to clarify
the boundaries of their duties, they have no medical insurance, their low wages (which is
currently – though not officially – handled by the head teacher) are often given late and
sporadically, and they often suffer verbal and emotional abuses from government employed
staff (even though their students generally perform better than those instructed by
government teachers). When hearing the challenges of the local teachers, it seems that a local
“union” for these teachers would protect and encourage them and give them the respect they
deserve.</p>
</div>`



























































const slides = [
  { src: "assets/AmazeMe3d.jpeg",  text: `Amaze Me 3D. <br> <br> We sell Items Such As: <br> <br> • Novelty Items and Gifts <br> • Models and Figurines <br> • And Other 3D Printed Designs <br> <br> <a href="https://www.facebook.com/groups/1301291670543597/" target="_blank">Link</a>`
},

  { src: "assets/Cartref.jpg", text: `Cartref at Cardigan Bay Quilts. <br> <br> We Sell Items Such As: <br> <br> • Blankets <br> • Quilts <br> • And Home Decor <br> <br> <a href="https://www.facebook.com/adaliza.brace/">Link</a>` },

  { src: "assets/Dahlia.jpg", text: `Dahlia Dwt. <br> <br> We Sell Items Such As: <br> <br> • Fresh Flowers <br> • Fascinators <br> • Gifts <br> • And Lots More Goodies <br> <br> <a href="https://www.facebook.com/profile.php?id=100088574941482">Link</a>` },

  { src: "assets/Daizy.jpg", text: `Daizy Chain Designz <br> <br> I Wasnt Able to find info on what is sold sorry. <br> <br> <a href="https://www.facebook.com/daizychaindesignz">Link</a>` },

  { src: "assets/Gwraig.jpg", text: `Gwraig Grefft <br> <br> We Sell Items Such As: <br> <br> • Medicinal Items Like Cough Syrup <br> • Arts and Crafts <br> • And More <br> <br> <a href="https://www.facebook.com/profile.php?id=61562312445325">Link</a>` },

  { src: "assets/HairStudio.jpg", text: `Hair Studio <br> <br> A Unisex Hair Studio <br> Located in the Upper Market <br> <br> <a href="https://www.facebook.com/profile.php?id=61562729732643">Link</a>` },

  { src: "assets/Home.jpg", text: `Home Appliance Repairs <br> <br> We Repair and Sell Items Such as: <br> <br> • Vacuum Cleaner Repairs <br> • Appliance Spares <br> • Vacuum Accessories <br> • And More <br> <br> <a href="https://www.facebook.com/Homeappliancerepairscardigan">Link</a>` },

  { src: "assets/Laurel.jpg", text: `Under The Laurel <br> <br> We Sell Items Such As: <br> <br> • Handmade Jewellery <br> • Gifts <br> • Cards and Artworks <br> • Pet Products <br> • And More <br> <br> <a href="https://www.facebook.com/underthelaurel"> Link </a>` },

  { src: "assets/Leafy.jpg", text: `Leafy Lion <br> <br> We Sell Items Such As: <br> <br> • Pet Portraits <br> • Animal Pictures <br> • Personalised Artwork <br> • Pyrography Artwork <br> • And More <br> <br> <a href="https://www.facebook.com/LeafyLionCreativeDen">Link</a>` },

  { src: "assets/Losat.jpg", text: `Lost In Time <br> <br> We Sell Items Such As: <br> <br> • Belts <br> • Bags <br>  • And More <br> <br> <a href="https://www.facebook.com/Lostintimecardigan">Link</a>` },

  { src: "assets/mEZE.jpg", text: `Mister Meze <br> <br> A Vegan Food And Drink Shop Located In The Upper Part Of The Market <br> <br> <a href="https://www.facebook.com/profile.php?id=61558168376687">Link</a>` },

  { src: "assets/Sharon.jpg", text: `Sharons Handcrafted Treasures <br> <br> We Sell Items Such As: <br> <br> • Earrings <br> • Pendants <br> • Bows <br> • Cushions <br> • And More <br> <br> <a href="https://www.facebook.com/sharonshandcraftedtreasures">Link</a>` },

  { src: "assets/Spinningwheel.jpg", text: `The Spinning Wheel <br> <br> We Sell Items Such As: <br> <br> • Welsh Souvenirs <br> • Greeting Cards <br> • Gifts <br> • And More <br> <br> <a href="https://www.facebook.com/profile.php?id=100063743086751">Link</a>` },

  { src: "assets/Tatwws.jpg", text: `Tatws O'r Galon <br> <br> A Food Stall Located In The Upper Part Of The Market <br> <br> <a href="https://www.facebook.com/profile.php?id=61583563014564">Link</a>` },

  { src: "assets/Teifi.jpg", text: `Teifi Traction <br> <br> A Welsh Bus History Exhibition Featuring: <br> <br> • Models <br> • Photos <br> • And Memorabilia <br> <br> <a href="https://www.facebook.com/profile.php?id=100066643359706">Link</a>` },

  { src: "assets/Timewarp.jpg", text: `TimeWarp <br> <br> We Sell Items Such As: <br> <br> • Antiques <br> • Collectables <br> • And More <br> <br> <a href="https://www.facebook.com/TimeWarpCardigan">Link</a>` },

  { src: "assets/Toby.jpg", text: `Toby Stitches <br> <br> We Sell Items Such As: <br> <br> • Wool <br> • Haberdashery <br> • Socks <br> • And More <br> <br> <a href="https://www.facebook.com/profile.php?id=100058030040807">Link</a>` },

  { src: "assets/Ttoem.jpg", text: `Totem <br> <br> We Sell Items Such As: <br> • Jewellery <br> • Rocks and Crystals <br> • Pendulums <br> • And More <br> <br> <a href="https://www.facebook.com/profile.php?id=100063724503434">Link</a> ` },

  { src: "assets/616845312_122158905362742919_1745512183979217167_n.jpg", text: `Hashtag Perfumes <br> <br> We Sell Items Such As: <br> <br> • Clothing <br> • Perfumes <br> • Jewelerry <br> • And More <br> <br> <a href="https://www.facebook.com/hashtagwales25">Link</a>` },

  { src: "assets/Mynydd Bach.jpg", text: `Mynydd Bach Creations <br> <br> We Sell Items Such As: <br> <br> • Candles <br> • Stained Glass <br> • And More <br> <br> <a href="https://www.facebook.com/profile.php?id=61563054999710">Link</a> ` },

];

let index = 0;

function showImage() {
  document.getElementById("slider").src = slides[index].src;
  document.getElementById("caption").innerHTML = slides[index].text;

}

function nextImage() {
  index = (index + 1) % slides.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + slides.length) % slides.length;
  showImage();
}


// All Code for image gallery on vendor page, including the next and prev buttons and the text to the right of image was with help of chatgpt


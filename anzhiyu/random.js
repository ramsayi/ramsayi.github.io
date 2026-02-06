var posts=["posts/899df239/","posts/ad2d1971/","posts/70c2fc3d/","posts/d33dd9c1/","posts/295f256c/","posts/280f8d40/","posts/b8f4bd70/","posts/a0b1cc7d/","posts/f0c817ec/","posts/f2029d3b/","posts/b2c596f5/","posts/81760b1b/","posts/fc876b88/","posts/d8b4433f/","posts/b2d509e5/","posts/e4e49048/","posts/261ddbfa/","posts/3fc4dfb9/","posts/23ff30ca/","posts/7a25a720/","posts/89ef8535/","posts/800690c0/","posts/a01a2cba/","posts/220267f2/","posts/f9b5041/","posts/c34a302d/","posts/f48c336e/","posts/20b9268c/","posts/1a350f0a/","posts/726b46a7/","posts/8fd81083/","posts/cdb07bf6/","posts/861974c8/","posts/53d4ee55/","posts/f857272c/","posts/4ba28477/","posts/2aae77a2/","posts/aa3c288f/","posts/dae7ff7b/","posts/5cfb881b/","posts/739fa8db/","posts/3cbedc1f/","posts/fea9501a/","posts/d388acaa/","posts/448a4ec5/","posts/ddd39f3e/","posts/cbc34163/","posts/1761ca15/","posts/f4b888f4/","posts/2bb37b42/","posts/55b2a1a5/","posts/fec652e4/","posts/808c487a/","posts/73424431/","posts/8f29c8ea/","posts/306ffe3/","posts/1fd37361/","posts/61620fdc/","posts/161dc1d4/","posts/1254b2d7/","posts/84b0f900/","posts/4826c9a5/","posts/e4743e84/","posts/8d05fb4a/","posts/36da500e/","posts/b5e6e462/","posts/22d36175/","posts/b8e4cbec/","posts/53120d80/","posts/4778d367/","posts/2238e6dd/","posts/394b7c6e/","posts/36138da1/","posts/a0422dd4/","posts/28661195/","posts/4114bd37/","posts/f3b40e6c/","posts/357344ce/","posts/9a5c3c2/","posts/5bbc51d7/","posts/71e17c0e/","posts/2d67944/","posts/75d149d2/","posts/da32a6cf/","posts/9bdf28fe/","posts/2579e950/","posts/9cb2ece7/","posts/c386cf1b/","posts/3fa2fffe/","posts/61aec8f/","posts/c6d7328c/","posts/ebb5dc71/","posts/a4cc445e/","posts/3f476402/","posts/283efcd9/","posts/d88e5f13/","posts/e76ad977/","posts/35767f2f/","posts/547d4cc2/","posts/7e8a0514/","posts/35d21355/","posts/cd741d78/","posts/ba732dee/","posts/2417b84d/","posts/8dce990f/","posts/d2fdc809/","posts/87137f47/","posts/de6e7ab8/","posts/e574c01a/","posts/56ee636f/","posts/a7d23c1/","posts/4f072fd7/","posts/8228db57/","posts/d7f18edd/","posts/6d870065/","posts/da701999/","posts/9dcc702b/","posts/b9223ce3/","posts/1386d0b9/","posts/4e290ddc/","posts/c6f5a50c/","posts/947f8646/","posts/f4677d2b/","posts/6d6e2c91/","posts/1a691c07/","posts/840d89a4/","posts/f30ab932/","posts/6a03e888/","posts/1d04d81e/","posts/8dbbc58f/","posts/9a7b7cfc/","posts/fabcf519/","posts/ed7c4c6a/","posts/3722d46/","posts/74751dd0/","posts/9d16b8e5/","posts/ea118873/","posts/7318d9c9/","posts/41fe95f/","posts/94a0f4ce/","posts/e3a7c458/","posts/d8f70a98/","posts/41fe5b22/","posts/aff03a0e/","posts/3194afad/","posts/c8321fba/","posts/6d427ba9/","posts/621d6fb0/","posts/d9852e2d/","posts/88d93796/","posts/6bbdbdae/","posts/a8f15a08/","posts/5d67c4fe/","posts/e26ca5c0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"空梦","link":"https://kmar.top/","avatar":"https://image.kmar.top/qqavatar.jpg","descr":"有编程的烦恼？来这里说不定可以找到答案~"},{"name":"Aohui","link":"https://aohuiliu.fun","avatar":"https://www.aohuiliu.fun/images/avatar.jpeg","descr":"记录学习，记录生活。"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
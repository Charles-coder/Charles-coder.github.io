var posts=["2023/07/31/10SpringBootWeb案例-1/","2023/09/02/11SpringBootWeb案例-2/","2023/09/04/13SpringBootWeb AOP/","2023/09/03/12SpringBootWeb登录认证/","2024/06/22/2024-06-22-WebPack/","2023/09/05/14SpringBoot原理篇/","2024/04/14/2024-4-14-仿淘宝项目总结笔记/","2023/07/17/2java笔记-02/","2023/07/18/3day03_Vue_Element/","2023/07/20/4Maven-04/","2023/07/22/4SpringBootWeb入门-04/","2023/07/24/5SpringBootWeb请求响应-05/","2023/07/25/6数据库-MySQL-01/","2023/07/26/7数据库-MySQL-02/","2023/07/28/7数据库-MySQL-03/","2023/07/29/8Mybatis入门/","2023/07/30/9Mybatis/","2024/10/13/React学习手册/","2023/07/16/hello-world/","2023/07/17/csp笔记/","2023/05/08/hexo魔改记录/","2023/09/17/内存管理专题/","2023/07/17/前端笔记/","2023/07/17/数据库笔记/","2023/09/04/后端八股千问/","2023/07/15/日报/","2024/11/17/信安概论/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","hundredSuffix":"!w120","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱"}];
    var refreshNum = 1;
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
var posts=["2023/11/06/hello-world/","2023/11/26/java学习历程记录-JavaWeb/","2023/11/21/java学习历程记录-前端基础/","2023/11/09/java安全漫谈的一些自我理解/","2023/11/13/python学习经历-2-flask/","2023/11/26/java学习历程记录-SpringMVC/","2023/11/11/python学习历程-1/","2023/11/09/关于博客搭建的一些自我心得/","2023/11/28/渗透测试学习之路/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
/**
 * Butterfly Github Canlendar
 * Ice Kano
 */

'use strict'

//导入 hexo logger
const logger = require('hexo-log')()

//定义函数
hexo.extend.helper.register('github_calendar_js_cdn', function(link){
  return   '<script src="'+ link +'"></script>'
});

hexo.extend.filter.register('after_generate',function(){
  logger.info('已导入小冰插件：Butterfly Github Canlendar')
  var github_calendar = hexo.theme.config.githubcalendar.enable;
  var github_user = hexo.theme.config.githubcalendar.user;
  var github_api = hexo.theme.config.githubcalendar.api;
  var github_color = hexo.theme.config.githubcalendar.color;
  var user_info_js = '<script>' + 'let git_githubapiurl ="'+ github_api + '?' + github_user +'";'+
      'let git_color ='+ github_color +';'+
      'let git_user ="'+ github_user +'";'+
      'let parent_div_git = document.getElementById("recent-posts");'+
      'let git_div_html = '+ "'"+'<div class="recent-post-item" style="width:100%;height:auto;padding:10px"><div id="github_container"></div></div>'+ "'"+';'+
      'parent_div_git.innerHTML=git_div_html+parent_div_git.innerHTML'+
      '</script>'

  hexo.extend.injector.register('body_end',user_info_js, 'default');



  //查询已定义函数并命名
  const github_calendar_js_cdn = hexo.extend.helper.get('github_calendar_js_cdn').bind(hexo);
  // inject插入 Github Canlendar js依赖
  hexo.extend.injector.register('body_end',github_calendar_js_cdn('https://cdn.jsdelivr.net/gh/Zfour/hexo-github-calendar/hexo_githubcalendar.js'), 'default');
})











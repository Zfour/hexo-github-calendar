/**
 * Hexo Github Canlendar
 * Ice Kano
 */

'use strict'

//导入 hexo logger
const logger = require('hexo-log')()

//定义函数
hexo.extend.helper.register('github_calendar_js_cdn', function(link){
  return   '<script data-pjax src="'+ link +'"></script>'
});

hexo.extend.filter.register('after_generate',function(){
  var github_calendar = hexo.theme.config.githubcalendar.enable;
  if (github_calendar){
    logger.info('已导入小冰插件：Butterfly Github Canlendar')
  var calendar_js = hexo.theme.config.githubcalendar.calendar_js;
  var github_color = hexo.theme.config.githubcalendar.color;
  var layout_id = hexo.theme.config.githubcalendar.layout_id;
  var githubcalendar_html = hexo.theme.config.githubcalendar.githubcalendar_html;
  var github_user = hexo.theme.config.githubcalendar.user;
  var github_api = hexo.theme.config.githubcalendar.api;
  var pc_minheight = hexo.theme.config.githubcalendar.pc_minheight;
  var mobile_minheight = hexo.theme.config.githubcalendar.mobile_minheight;
  var user_info_js = '<script data-pjax>' + 'let git_githubapiurl ="'+ github_api + '?' + github_user +'";'+
      'let git_color ='+ github_color +';'+
      'let git_user ="'+ github_user +'";'+
      'let parent_div_git = document.getElementById('+'"'+ layout_id +'"'+');'+
      'let git_div_html = '+ "'"+ githubcalendar_html + "'"+';'+
      'if(parent_div_git){parent_div_git.innerHTML=git_div_html+parent_div_git.innerHTML}'+';'+
      '</script><style>'+'#github_container{min-height:'+pc_minheight+'}'+'@media screen and (max-width:650px) {#github_container{background-image:;min-height:'+mobile_minheight+'}}'+'</style>'

  hexo.extend.injector.register('body_end',user_info_js, 'default');



  //查询已定义函数并命名
  const github_calendar_js_cdn = hexo.extend.helper.get('github_calendar_js_cdn').bind(hexo);
  // inject插入 Github Canlendar js依赖
  hexo.extend.injector.register('body_end',github_calendar_js_cdn(calendar_js), 'default');
}})











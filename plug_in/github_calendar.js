/**
 * Hexo Github Canlendar
 * Ice Kano
 * Modify: Lete乐特
 */

'use strict'

//导入 hexo logger
const logger = require('hexo-log')()

hexo.extend.filter.register('after_generate',function(){
  var github_calendar = hexo.theme.config.githubcalendar.enable;
  if (github_calendar){
    logger.info('已导入小冰插件：Butterfly Github Canlendar')
  var calendar_page_setting = hexo.theme.config.githubcalendar.calendar_page_setting;  
  var calendar_js = hexo.theme.config.githubcalendar.calendar_js;
  var github_color = hexo.theme.config.githubcalendar.color;
  var layout_id = hexo.theme.config.githubcalendar.layout_id;
  var githubcalendar_html = hexo.theme.config.githubcalendar.githubcalendar_html;
  var github_user = hexo.theme.config.githubcalendar.user;
  var github_api = hexo.theme.config.githubcalendar.api;
  var pc_minheight = hexo.theme.config.githubcalendar.pc_minheight;
  var mobile_minheight = hexo.theme.config.githubcalendar.mobile_minheight;
  var user_info_js = `
  <script data-pjax src="${calendar_js}"></script>
  <script data-pjax>
        function GithubCalendarConfig(){
            var git_githubapiurl ="${github_api}?${github_user}";
            var git_color =${github_color};
            var git_user ="${github_user}";
            var parent_div_git = document.getElementById("${layout_id}");
            var git_div_html = '${githubcalendar_html}';
            if(parent_div_git){
                // parent_div_git.innerHTML=git_div_html+parent_div_git.innerHTML // 无报错，但不影响使用(支持pjax跳转)
                parent_div_git.insertAdjacentHTML("afterbegin",git_div_html) // 有报错，但不影响使用(支持pjax跳转)
            };
            GithubCalendar(git_githubapiurl,git_color,git_user)
        }
        if(document.getElementById("${layout_id}")){
            GithubCalendarConfig()
        }
    </script>
    <style>#github_container{min-height:${pc_minheight}}@media screen and (max-width:650px) {#github_container{background-image:;min-height:${mobile_minheight}}}</style>`
    hexo.extend.injector.register('body_end',user_info_js, "default");
}})

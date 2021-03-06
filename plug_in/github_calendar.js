/**
 * Hexo Github Canlendar
 * Ice Kano
 * Modify: Lete乐特
 */

'use strict'

hexo.extend.filter.register('after_generate',function(){
    var config = this.config;
    var github_calendar = config.githubcalendar.enable;
    if (github_calendar){
        var calendar_js = config.githubcalendar.calendar_js;
        var github_color = config.githubcalendar.color;
        var layout_id = config.githubcalendar.layout_id;
        var githubcalendar_html = config.githubcalendar.githubcalendar_html;
        var github_user = config.githubcalendar.user;
        var github_api = config.githubcalendar.api;
        var pc_minheight = config.githubcalendar.pc_minheight;
        var mobile_minheight = config.githubcalendar.mobile_minheight;
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

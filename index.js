/**
 * Hexo Github Canlendar
 * Ice Kano
 * Modify: Lete乐特
 */

'use strict'

function priority_githubcalendar(){
    var priority = 0
    if(hexo.config.githubcalendar.priority){
        priority = hexo.config.githubcalendar.priority
    }
    else{
        priority = 0
    }
    return priority
}

var priority = 0
hexo.extend.filter.register('after_generate',function(){
    var config = this.config;
    var github_calendar = config.githubcalendar.enable;
    if (github_calendar){
        var calendar_enable_page = config.githubcalendar.enable_page;
        var calendar_js = config.githubcalendar.calendar_js;
        var github_color = config.githubcalendar.color;
        var layout_name ='';
        var layout_type ='';
        var layout_index =0;
        if(config.githubcalendar.layout_id){
            layout_name = config.githubcalendar.layout_id;
            layout_type = 'id';
        }else{
            layout_name = config.githubcalendar.layout.name;
            layout_type = config.githubcalendar.layout.type;
            layout_index =  config.githubcalendar.layout.index;
        }
        var get_layout = ''
        if (layout_type == 'class'){
            get_layout =  `document.getElementsByClassName('${layout_name}')[${layout_index}]`
        }else if (layout_type == 'id'){
            get_layout =  `document.getElementById('${layout_name}')`
        }else {
            get_layout =  `document.getElementById('${layout_name}')`
        }
        var plus_style = config.githubcalendar.plus_style;
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
            var parent_div_git = ${get_layout};
            var git_div_html = '${githubcalendar_html}';
            if(parent_div_git && location.pathname =='${calendar_enable_page}'){
                console.log('已挂载github calendar')
                // parent_div_git.innerHTML=git_div_html+parent_div_git.innerHTML // 无报错，但不影响使用(支持pjax跳转)
                parent_div_git.insertAdjacentHTML("afterbegin",git_div_html) // 有报错，但不影响使用(支持pjax跳转)
            };
            GithubCalendar(git_githubapiurl,git_color,git_user)
        }
        if(${get_layout}){
            GithubCalendarConfig()
        }
    </script>
    <style>#github_container{min-height:${pc_minheight}}@media screen and (max-width:650px) {#github_container{background-image:;min-height:${mobile_minheight}}}</style>
    <style>${plus_style}</style>`
        hexo.extend.injector.register('body_end',user_info_js, "default");
    }},priority_githubcalendar())
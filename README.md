# hexo-github-calendar

主题配置项：

```yml
# Ice Kano Plus_in
# Hexo Github Canlendar
# Author: Ice Kano
# Modify: Lete乐特

githubcalendar:
  enable: true
  user: zfour
  layout_id: recent-posts
  githubcalendar_html: '<div class="recent-post-item" style="width:100%;height:auto;padding:10px;"><div id="github_container"></div></div>'
  pc_minheight: 280px
  mobile_minheight: 120px
  color: "['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f']"
  api: https://python-github-calendar-api.vercel.app/api
  calendar_js: https://cdn.jsdelivr.net/gh/Zfour/hexo-github-calendar@1.10/hexo_githubcalendar.js
```

把plug_in丢到  "\{blogroot}\themes\butterfly\scripts"下


hexo clean&hexo g&hexo s


就完成了。

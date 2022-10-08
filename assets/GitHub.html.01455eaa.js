import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,b as s,d as a,e as t,r as l}from"./app.9328c6fb.js";const p={},r=t('<h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2><p>GitHub Actions \u662F\u4E00\u4E2A\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u4EA4\u4ED8 (CI/CD) \u5E73\u53F0\uFF0C\u53EF\u7528\u4E8E\u81EA\u52A8\u6267\u884C\u6784\u5EFA\u3001\u6D4B\u8BD5\u548C\u90E8\u7F72\u7BA1\u9053\u3002\u60A8\u53EF\u4EE5\u521B\u5EFA\u5DE5\u4F5C\u6D41\u7A0B\u6765\u6784\u5EFA\u548C\u6D4B\u8BD5\u5B58\u50A8\u5E93\u7684\u6BCF\u4E2A\u62C9\u53D6\u8BF7\u6C42\uFF0C\u6216\u5C06\u5408\u5E76\u7684\u62C9\u53D6\u8BF7\u6C42\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\u3002\u5C06 GitHub Actions \u547D\u4EE4\u4FDD\u5B58\u4E3A <code>main.yml</code>\uFF0C\u653E\u4E8E <code>.github\\workflows</code> \u76EE\u5F55\u4E0B\uFF0Crepo \u53D1\u751F\u6307\u5B9A\u8C03\u8282\u7684\u6539\u53D8\u65F6\uFF0CActions \u4F1A\u81EA\u52A8\u8FD0\u884C\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',2),u={href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,[s("\u5982\u679C GitHub Actions \u547D\u4EE4\u4E2D\u6709\u6D89\u53CA\u5BC6\u7801\u7B49\u79C1\u5BC6\u4FE1\u606F\uFF0C\u5219\u8FDB\u5165\u9879\u76EE\u4ED3\u5E93\u7684\u300Csetting - Secrets - Action\u300D\uFF0C\u6DFB\u52A0\u5BC6\u94A5\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\u3002\u6BD4\u5982\u65B0\u5EFA\u5BC6\u94A5 PERSONAL_TOKEN\uFF0CActions \u547D\u4EE4\u4E2D\u4F7F\u7528 "),n("code",null,"${{ secrets.PERSONAL_TOKEN }}"),s(" \u6765\u6307\u4EE3\u8BE5\u5BC6\u94A5\u3002")],-1),h=n("h3",{id:"\u4E0D\u540C\u4ED3\u5E93\u95F4\u590D\u5236",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E0D\u540C\u4ED3\u5E93\u95F4\u590D\u5236","aria-hidden":"true"},"#"),s(" \u4E0D\u540C\u4ED3\u5E93\u95F4\u590D\u5236")],-1),m={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"clean: true",-1),_={href:"https://docs.github.com/cn/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> docs/README.md
    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /
    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben
    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData
    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main
    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> main
    <span class="token comment">#clean: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions-\u5931\u8D25\u91CD\u8BD5" tabindex="-1"><a class="header-anchor" href="#actions-\u5931\u8D25\u91CD\u8BD5" aria-hidden="true">#</a> Actions \u5931\u8D25\u91CD\u8BD5</h3><p>\u5728 job \u548C step \u4E2D\u4F7F\u7528 if \u8BED\u53E5\uFF0C\u53EA\u6709\u6EE1\u8DB3\u6761\u4EF6\u65F6\u624D\u6267\u884C\u5177\u4F53\u7684 job \u6216 step\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4EFB\u52A1\u72B6\u6001\u68C0\u67E5\u51FD\u6570</span>
success<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5F53\u4E0A\u4E00\u6B65\u6267\u884C\u6210\u529F\u65F6\u8FD4\u56DE true</span>
always<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u603B\u662F\u8FD4\u56DE true</span>
cancelled<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5F53 workflow \u88AB\u53D6\u6D88\u65F6\u8FD4\u56DE true</span>
failure<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5F53\u4E0A\u4E00\u6B65\u6267\u884C\u5931\u8D25\u65F6\u8FD4\u56DE true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>first_step \u4F1A\u603B\u662F\u6267\u884C\uFF0Csecond_step \u9700\u8981\u4E0A\u4E00\u6B65 first_step \u6267\u884C\u6210\u529F\u624D\u4F1A\u6267\u884C\uFF0Cthird_step \u53EA\u6709\u4E0A\u4E00\u6B65 second_step \u6267\u884C\u5931\u8D25\u624D\u6267\u884C\u3002\u5F53 third_step \u4E0E second_step \u547D\u4EE4\u76F8\u540C\u65F6\uFF0C\u5C31\u53EF\u4EE5\u8FBE\u5230\u5931\u8D25\u91CD\u8BD5\u7684\u6548\u679C\u4E86\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">first_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> first_step
        <span class="token key atrule">if</span><span class="token punctuation">:</span> always()

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> second_step
        <span class="token key atrule">if</span><span class="token punctuation">:</span> success()

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> third_step
        <span class="token key atrule">if</span><span class="token punctuation">:</span> failure()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uses-\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#uses-\u7248\u672C\u53F7" aria-hidden="true">#</a> uses \u7248\u672C\u53F7</h3><p><code>uses: SamKirkland/FTP-Deploy-Action@4.3.1</code>\uFF1Auses \u4F1A\u6307\u5B9A\u6B64\u6B65\u9AA4\u8FD0\u884C SamKirkland/FTP-Deploy-Action \u5B58\u50A8\u5E93\u4E2D\u7684 4.3.1 \u7248\u672C\u3002</p><p>\u4F46\u6709\u65F6 Actions \u7684\u7248\u672C\u4E0D\u4F1A\u8FD9\u4E48\u5FEB\u66F4\u65B0\uFF0C\u53C8\u5FC5\u987B\u4F7F\u7528\u6700\u65B0\u7248\uFF0C\u53EF\u4EE5\u5C06\u7248\u672C\u53F7\u6539\u4E3A branch name\uFF0C\u6BD4\u5982 <code>uses: SamKirkland/FTP-Deploy-Action@master</code>\u3002</p><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="github-\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#github-\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6" aria-hidden="true">#</a> GitHub \u5FFD\u7565\u6307\u5B9A\u6587\u4EF6</h3><p>\u9879\u76EE\u8DEF\u5F84\u65B0\u5EFA\u4E00\u4E2A\u547D\u540D\u4E3A .gitignore \u7684\u6587\u4EF6\uFF0C\u5C06\u60F3\u8981\u5FFD\u7565\u7684\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u5199\u5165 .gitignore \u6587\u4EF6\uFF0C\u6362\u884C\u5206\u9694\u3002</p><p>\u6BD4\u5982\u8981\u5FFD\u7565 node_modules \u6587\u4EF6\u5939\uFF0C\u5C31\u76F4\u63A5\u5728\u6587\u4EF6\u4E2D\u8F93\u5165 node_modules\u3002</p><hr class="footnotes-sep">`,14),g={class:"footnotes"},y={class:"footnotes-list"},A={id:"footnote1",class:"footnote-item"},x={href:"https://docs.github.com/cn/actions/learn-github-actions/understanding-github-actions",target:"_blank",rel:"noopener noreferrer"},E=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),w={id:"footnote2",class:"footnote-item"},G={href:"https://blog.csdn.net/Ber_Bai/article/details/120310024",target:"_blank",rel:"noopener noreferrer"},H=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1);function N(D,S){const e=l("ExternalLinkIcon");return c(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("GitHub Actions \u5B98\u65B9\u5E02\u573A"),a(e)])]),n("li",null,[n("a",d,[s("Awesome Actions"),a(e)])])]),k,h,n("p",null,[s("\u590D\u5236\u6587\u4EF6\u5230\u76EE\u7684\u5730\uFF0C\u6587\u6863\u6CA1\u53D8\u5316\u5219\u4E0D\u4F1A\u6267\u884C\u3002\u6848\u4F8B\u4E3A\u5C06\u5F53\u524D\u4ED3\u5E93 main \u5206\u652F\u4E0B docs \u7684 "),n("a",m,[s("README.md"),a(e)]),s(" \u6587\u4EF6\u590D\u5236\u5230\u53E6\u4E00\u4E2A\u4ED3\u5E93 rockbenben/LearnData/ \u8DEF\u5F84\u4E0B\uFF0C\u5982\u679C\u76EE\u6807\u8DEF\u5F84\u5B58\u5728\u76F8\u540C\u6587\u4EF6\uFF0C\u5219\u5C06\u8986\u76D6\u3002\u5982\u679C\u8BA9 "),b,s(" \u751F\u6548\uFF0CActions \u4F1A\u5C06\u76EE\u6807\u8DEF\u5F84\u60C5\u51B5\uFF0C\u7136\u540E\u6267\u884C\u590D\u5236\u3002")]),n("p",null,[s("\u6B64\u52A8\u4F5C\u9700\u6309 "),n("a",_,[s("Creating a personal access token"),a(e)]),s(" \u5EFA\u7ACB "),n("a",v,[s("\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C"),a(e)]),s("\uFF0C\u52FE\u9009\u6743\u9650\u300Crepo Full control of private repositories\u300D\uFF0C\u7136\u540E\u5C06\u8BE5 token \u503C\u5176\u4FDD\u5B58\u5728\u9879\u76EE\u4ED3\u5E93\u7684 Action \u5BC6\u94A5\u3002")]),f,n("section",g,[n("ol",y,[n("li",A,[n("p",null,[n("a",x,[s("\u4E86\u89E3 GitHub Actions"),a(e)]),s(),E])]),n("li",w,[n("p",null,[n("a",G,[s("\u6700\u5168\u603B\u7ED3\uFF0CGitHub Action \u81EA\u52A8\u5316\u90E8\u7F72"),a(e)]),s(),H])])])])])}const K=o(p,[["render",N],["__file","GitHub.html.vue"]]);export{K as default};
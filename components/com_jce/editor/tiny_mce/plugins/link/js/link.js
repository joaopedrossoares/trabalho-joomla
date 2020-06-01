/* jce - 2.8.12 | 2020-05-12 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2020 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function($,tinyMCEPopup){var emailRex=/(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/,toggleTargetRules=function(rel,isUnsafe){var rules=["noopener"],newRel=rel?rel.split(/\s+/):[],toString=function(rel){return $.trim(rel.sort().join(" "))},addTargetRules=function(rel){return rel=removeTargetRules(rel),rel.length?rel.concat(rules):rules},removeTargetRules=function(rel){return rel.filter(function(val){return $.inArray(val,rules)===-1})};return newRel=isUnsafe?addTargetRules(newRel):removeTargetRules(newRel),newRel.length?toString(newRel):null},LinkDialog={settings:{},init:function(){function setText(state,v){state&&v?$("#text").val(v).attr("disabled",!1):$("#text").val("").attr("disabled",!0).parents("tr").hide()}var n,el,self=this,ed=tinyMCEPopup.editor,se=ed.selection;if(tinyMCEPopup.restoreSelection(),$("button#insert").on("click",function(e){self.insert(),e.preventDefault()}),this.settings.file_browser||$("#href").removeClass("browser"),$(".email").on("click",function(e){e.preventDefault(),LinkDialog.createEmail()}),$("#anchor_container").html(this.getAnchorListHTML("anchor","href")),$("#link-browser").tree({collapseTree:!0,charLength:50}).on("tree:nodeclick",function(e,evt,node){var v;if($(evt.target).is("button.link-preview")){e.preventDefault(),e.stopImmediatePropagation();var url=$(node).attr("data-id")||$(node).attr("id"),title=$(node).attr("aria-label");return url.indexOf("index.php")!==-1&&(url+="&tmpl=component",url=ed.documentBaseURI.toAbsolute(url,!0)),void Wf.Modal.iframe(title,url,{width:"100%",height:480})}$(node).hasClass("folder")&&$(this).trigger("tree:togglenode",[e,node]),$(node).hasClass("nolink")||(v=$("a",node).attr("href"),"#"==v&&(v=$(node).attr("data-id")||$(node).attr("id")),self.insertLink(Wf.String.decode(v)))}).on("tree:nodeload",function(e,node){var self=this;$(this).trigger("tree:toggleloader",node);var id=$(node).attr("data-id")||$(node).attr("id"),query=Wf.String.query(Wf.String.unescape(id));Wf.JSON.request("getLinks",{json:query},function(o){if(o)if(o.error)Wf.Modal.alert(o.error);else{var ul=$("ul:first",node);ul&&$(ul).remove(),o.folders&&o.folders.length&&$(self).trigger("tree:createnode",[o.folders,node,!1]),$(node).find("li.file").not(".anchor").append('<button type="button" aria-label="'+ed.getLang("dlg.preview","Preview")+'" class="uk-button uk-button-link link-preview"><i class="uk-icon uk-icon-preview" role="presentation"></i></button>'),$(self).trigger("tree:togglenodestate",[node,!0])}$(self).trigger("tree:toggleloader",node)},self)}).trigger("tree:init"),$("#search-button").on("click",function(e){self._search(),e.preventDefault()}).button({icons:{primary:"uk-icon-search"}}),$("#search-clear").on("click",function(e){$(this).hasClass("uk-active")&&($(this).removeClass("uk-active"),$("#search-input").val(""),$("#search-result").empty().hide())}),$("#search-options-button").on("click",function(e){e.preventDefault(),$(this).hasClass("uk-active")?$(this).removeClass("uk-active"):$(this).addClass("uk-active");var $p=$("#search-options").parent();$("#search-options").height($p.parent().height()-$p.outerHeight()-15).toggle()}).on("close",function(){$(this).removeClass("uk-active"),$("#search-options").hide()}),$(el).on("change keyup",function(){""===this.value&&($("#search-result").empty().hide(),$("#search-clear").removeClass("uk-active"))}),$(window).on("keydown",function(e){13===e.keyCode&&$("#search-input").is(":focus")&&(self._search(),e.preventDefault(),e.stopPropagation())}),WFPopups.setup(),!se.isCollapsed()){n=se.getNode();var state=!0,v="";if(n){n=ed.dom.getParent(n,"A")||n;var v=se.getContent({format:"text"}),shortEnded=ed.schema.getShortEndedElements();if(tinymce.isIE||tinymce.isIE11){var start=se.getStart(),end=se.getEnd();start===end&&"A"===start.nodeName&&(n=start)}if("A"===n.nodeName){var i,nodes=n.childNodes;if(0===nodes.length)state=!1;else for(i=nodes.length-1;i>=0;i--)if(3!==nodes[i].nodeType){state=!1;break}}else shortEnded[n.nodeName]?state=!1:/</.test(se.getContent())&&(state=!1)}setText(state,v)}if(Wf.init(),$.each(this.settings.attributes,function(k,v){0===parseInt(v)&&$("#attributes-"+k).hide()}),n&&"A"==n.nodeName){$(".uk-button-text","#insert").text(tinyMCEPopup.getLang("update","Update",!0));var href=decodeURIComponent(ed.convertURL(ed.dom.getAttrib(n,"href")));$("#href").val(href),$.each(["title","id","style","dir","lang","tabindex","accesskey","charset","hreflang","target"],function(i,k){$("#"+k).val(ed.dom.getAttrib(n,k))}),$("#dir").val(ed.dom.getAttrib(n,"dir")),$("#rev").val(ed.dom.getAttrib(n,"rev"),!0),"#"==href.charAt(0)&&$("#anchor").val(href),$("#classes").val(function(){var values=ed.dom.getAttrib(n,"class");return $.trim(values)}).trigger("change"),$("#target").val(ed.dom.getAttrib(n,"target"));var data=WFPopups.getPopup(n)||{};$("#rel").val(function(){var v=data.rel;return"string"!==$.type(v)&&(v=ed.dom.getAttrib(n,"rel")),v?(v=$.trim(v),v=ed.dom.encode(v)):""}).trigger("change")}else Wf.setDefaults(this.settings.defaults);"html5"==ed.settings.schema&&ed.settings.validate&&$("#rev").parent().parent().hide(),$("select").datalist().trigger("datalist:update"),$(".uk-datalist").trigger("datalist:update"),window.focus()},getAnchorListHTML:function(id,target){var name,ed=tinyMCEPopup.editor,nodes=ed.dom.select(".mce-item-anchor"),html="";return html+='<select id="'+id+'" class="mceAnchorList" onchange="this.form.'+target+".value=",html+='this.options[this.selectedIndex].value;">',html+='<option value="">---</option>',$.each(nodes,function(i,n){"SPAN"==n.nodeName?name=ed.dom.getAttrib(n,"data-mce-name")||ed.dom.getAttrib(n,"id"):n.href||(name=ed.dom.getAttrib(n,"name")||ed.dom.getAttrib(n,"id")),name&&(html+='<option value="#'+name+'">'+name+"</option>")}),html+="</select>"},checkPrefix:function(n){var self=this,v=$(n).val();emailRex.test(v)&&!/^\s*mailto:/i.test(v)?Wf.Modal.confirm(tinyMCEPopup.getLang("link_dlg.is_email","The URL you entered seems to be an email address, do you want to add the required mailto: prefix?"),function(state){state&&$(n).val("mailto:"+v),self.insertAndClose()}):/^\s*www./i.test(v)?Wf.Modal.confirm(tinyMCEPopup.getLang("link_dlg.is_external","The URL you entered seems to be an external link, do you want to add the required https:// prefix?"),function(state){state&&$(n).val("https://"+v),self.insertAndClose()}):this.insertAndClose()},insert:function(){tinyMCEPopup.restoreSelection();var ed=tinyMCEPopup.editor,se=ed.selection;return""==$("#href").val()?(Wf.Modal.alert(ed.getLang("link_dlg.no_href","A URL is required. Please select a link or enter a URL"),{close:function(){$("#href").focus()}}),!1):se.isCollapsed()&&""==$("#text").not(":disabled").val()?(Wf.Modal.alert(ed.getLang("link_dlg.no_text","Please enter some text for the link"),{close:function(){$("#text").focus()}}),!1):this.checkPrefix($("#href"))},insertAndClose:function(){tinyMCEPopup.restoreSelection();var el,se=(ed=tinyMCEPopup.editor,ed.selection),n=se.getNode(),args={},attribs=["href","title","target","id","style","class","rel","rev","charset","hreflang","dir","lang","tabindex","accesskey","type"];tinymce.each(attribs,function(k){var v=$("#"+k).val();v=tinymce.trim(v),"href"==k&&(v=Wf.String.buildURI(v)),"class"==k&&(v=$("#classes").val()||"",v=$.trim(v)),args[k]=v}),ed.settings.allow_unsafe_link_target||(args.rel=toggleTargetRules(args.rel,"_blank"==args.target&&/:\/\//.test(args.href)));var txt=$("#text").val();if(se.isCollapsed())ed.execCommand("mceInsertContent",!1,'<a href="'+args.href+'" id="__mce_tmp">'+txt+"</a>",{skip_undo:1}),el=ed.dom.get("__mce_tmp"),ed.dom.setAttribs(el,args);else{n&&"A"===n.nodeName?ed.dom.setAttribs(n,{href:args.href,"data-mce-tmp":"1"}):ed.execCommand("mceInsertLink",!1,{href:args.href,"data-mce-tmp":"1"}),ed.dom.setAttrib(n,"style",ed.dom.getAttrib(n,"data-mce-style"));var elms=ed.dom.select("a[data-mce-tmp]");args["data-mce-tmp"]=null,tinymce.each(elms,function(elm,i){ed.dom.setAttribs(elm,args),i>0&&args.id&&ed.dom.setAttrib(elm,"id",""),txt&&("innerText"in elm?elm.innerText=txt:elm.textContent=txt)}),elms.length&&(el=elms[0])}txt&&(ed.selection.select(el),ed.selection.collapse(0)),el=el||n,WFPopups.createPopup(el),ed.undoManager.add(),ed.nodeChanged(),tinyMCEPopup.close()},setClasses:function(v){Wf.setClasses(v)},setTargetList:function(v){$("#target").val(v)},setClassList:function(v){$("#classlist").val(v)},insertLink:function(v){$("#href").val(tinyMCEPopup.editor.documentBaseURI.toRelative(v))},createEmail:function(){var ed=tinyMCEPopup.editor,fields='<div class="uk-form-horizontal">';$.each(["mailto","cc","bcc","subject"],function(i,k){fields+='<div class="uk-form-row"><label class="uk-form-label uk-width-3-10" for="email_'+k+'">'+ed.getLang("link_dlg."+k,k)+'</label><div class="uk-form-controls uk-width-7-10"><textarea id="email_'+k+'"></textarea></div></div>'}),fields+="</div>",Wf.Modal.open(ed.getLang("link_dlg.email","Create E-Mail Address"),{width:300,open:function(){var v=$("#href").val();if(v&&emailRex.test(v)){var parts=v.replace(/\?/,"&").replace(/\&amp;/g,"&").split("&"),address=parts.shift();$("#email_mailto").val(address.replace(/^mailto\:/,"")),$.each(parts,function(i,s){var k=s.split("=");2===k.length&&$("#email_"+k[0]).val(k[1])})}},buttons:[{text:ed.getLang("link_dlg.create_email","Create Email"),click:function(){var args=[],errors=0;$.each(["mailto","cc","bcc","subject"],function(i,s){var v=$("#email_"+s).val();v&&(v=v.replace(/\n\r/g,""),$.each(v.split(","),function(i,o){if("subject"!==s&&!/@/.test(o)){var msg=ed.getLang("link_dlg.invalid_email","%s is not a valid e-mail address!");Wf.Modal.alert(msg.replace(/%s/,ed.dom.encode(o))),errors++}}),args.push("mailto"==s?v:s+"="+v))}),0===errors&&(args.length&&$("#href").val("mailto:"+args.join("&").replace(/&/,"?")),$(this).trigger("modal.close"))},attributes:{class:"uk-button-primary"},icon:"uk-icon-check"},{text:ed.getLang("dlg.cancel","Cancel"),icon:"uk-icon-close",attributes:{class:"uk-modal-close"}}]},fields)},openHelp:function(){Wf.help("link")},_search:function(){var self=this,$p=$("#search-result").parent(),query=$("#search-input").val();query&&!$("#search-input").hasClass("placeholder")&&($("#search-clear").removeClass("uk-active"),$("#search-browser").addClass("loading"),query=$.trim(query.replace(/[\/\/\/<>#]/g,"")),Wf.JSON.request("doSearch",{json:[query]},function(o){o&&!o.error?($("#search-result").empty(),o.length&&($.each(o,function(i,n){var $dl=$('<dl class="uk-margin-small" />').appendTo("#search-result");$('<dt class="link uk-margin-small" />').text(n.title).on("click",function(){self.insertLink(Wf.String.decode(n.link))}).prepend('<i class="uk-icon uk-icon-file-text uk-margin-small-right" />').appendTo($dl),$('<dd class="text">'+n.text+"</dd>").appendTo($dl),n.anchors&&$.each(n.anchors,function(i,a){$('<dd class="anchor"><i role="presentation" class="uk-icon uk-icon-anchor uk-margin-small-right"></i>#'+a+"</dd>").on("click",function(){self.insertLink(Wf.String.decode(n.link+"#"+a))}).appendTo($dl)})}),$("dl:odd","#search-result").addClass("odd")),$("#search-options-button").trigger("close"),$("#search-result").height($p.parent().height()-$p.outerHeight()-5).show()):Wf.Modal.alert(o.error||"The server return an invalid response"),$("#search-browser").removeClass("loading"),$("#search-clear").addClass("uk-active")},self))}};window.LinkDialog=LinkDialog,tinyMCEPopup.onInit.add(LinkDialog.init,LinkDialog)}(jQuery,tinyMCEPopup);
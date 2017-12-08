var app = new Vue({
    el: "#app",
    data: {
        editorTxt : "",
        editorHtml : ""
    },
    methods: {
        editorEdit: function(){


            // editor
            app.editorTxt = app.editorTxt.replace(/^<page>/gm,'  <page>\n  </page>')
            app.editorTxt = app.editorTxt.replace(/^<row>/gm,'    <row>\n    </row>')
            app.editorTxt = app.editorTxt.replace(/^<col>/gm,'      <col>\n      </col>')
            app.editorTxt = app.editorTxt.replace(/^<box>/gm,'        <box>\n        </box>')
            app.editorTxt = app.editorTxt.replace(/^<ball>/gm,'          <ball>\n          </ball>')



            // specialchars
            var  ans = app.editorTxt;
            ans = ans.replace(/</gm,'&lt;');
            ans = ans.replace(/>/gm,'&gt;');

            // original tag
            ans = ans.replace(/&lt;ball&gt;/gm,'<p class="ball">');
            ans = ans.replace(/&lt;\/ball&gt;/gm,'</p>');
            ans = ans.replace(/&lt;box&gt;/gm,'<section class="box">');
            ans = ans.replace(/&lt;\/box&gt;/gm,'</section>');
            ans = ans.replace(/&lt;col&gt;/gm,'<section class="col">');
            ans = ans.replace(/&lt;\/col&gt;/gm,'</section>');
            ans = ans.replace(/&lt;row&gt;/gm,'<section class="row">');
            ans = ans.replace(/&lt;\/row&gt;/gm,'</section>');
            ans = ans.replace(/&lt;page&gt;/gm,'<section class="page">');
            ans = ans.replace(/&lt;\/page&gt;/gm,'</section>');



            app.editorHtml =  ans ;

        }
    }
});

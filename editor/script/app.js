(function(){
  'use strict';

  $(document).ready(function(){
    rangy.init();
    rangy.shim();
    var editor = window.coderuse_editor_toolbar;
    editor.attachEventsToToolbar();
  });
}());
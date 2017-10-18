(function (w) {
  'use strict';

  var editorClass = '.coderuse-editor';
  var d = w.document;

  function attachEventsToToolbar() {
    $('.toolbar .action').click(function () {
      var self = $(this);
      var intent = self.data("intent");
      var editBox = $(editorClass + ' .edit-box');
      editBox.focus();
      switch (intent) {
        case 'bold':
          applyIntent('bold', 'strong', 'coderuse-editor-bold', editBox);
          break;
        case 'italic':
          applyIntent('italic', 'em', 'coderuse-editor-italic', editBox);
          break;
        case 'left':
          applyAlignment('text-left', editBox);
          break;
        case 'center':
          applyAlignment('text-center', editBox);
          break;
        case 'right':
          applyAlignment('text-right', editBox);
          break;
        case 'superscript':
          applyIntent('superscript', 'sup', 'coderuse-editor-sup', editBox);
          break;
        case 'subscript':
          applyIntent('subscript', 'sub', 'coderuse-editor-sub', editBox);
          break;
        default:
          console.log(intent);
      }
    });
  }

  function applyAlignment(className) {
    var sel = rangy.getSelection();
    if (sel.rangeCount > 0) {
      var range = sel.getRangeAt(0);
      var parentElement = range.commonAncestorContainer;
      if (parentElement.nodeType == 3) {
        parentElement = parentElement.parentNode;
      }

      parentElement = $(parentElement).removeClass('text-left text-center text-right').addClass(className);
    }
  }

  function applyIntent(intent, tagName, className, element) {

    var attr = element.attributes;
    if (attr && attr.className) {
      delete attr.className;
    }
    var applier = rangy.createClassApplier(className, {
      elementTagName: tagName
    });
    applier.toggleSelection(w);
  }

  window.coderuse_editor_toolbar = {
    attachEventsToToolbar: attachEventsToToolbar
  };
}(window));
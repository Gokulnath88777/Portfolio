document.addEventListener("DOMContentLoaded", function () {
  home.classList.add("bounce-in-top")
  var typed = new Typed("#typed", {
    strings: ["Technology Specialist", "MERN Stack Learner", "Trainer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true

  });
});
let navSkill = document.getElementById("navSkill")
let skill = document.getElementById("skills")
let navHome = document.getElementById("navHome")
let navAbout = document.getElementById("navAbout")
let navProject = document.getElementById("navProject")
let project = document.getElementById("projects")


let home = document.getElementById("home")
navHome.addEventListener("click", () => {
  home.style.display = "flex"
  skill.style.display = "none"
  about.style.display = "none"
  project.style.display = "none"
  home.classList.add("bounce-in-top")
  setTimeout(() => {
    home.classList.remove("bounce-in-top")
  }, 1000)
})



navSkill.addEventListener("click", () => {
  home.style.display = "none"
  about.style.display = "none"
  project.style.display = "none"
  skill.style.display = "grid"
  skill.classList.add("bounce-in-top")
  setTimeout(() => {
    skill.classList.remove("bounce-in-top")
  }, 1000)
})

let about = document.getElementById("about")
navAbout.addEventListener("click", () => {
  home.style.display = "none"
  skill.style.display = "none"
  project.style.display = "none"
  about.style.display = "grid"
  about.classList.add("bounce-in-top")
  setTimeout(() => {
    about.classList.remove("bounce-in-top")
  }, 1000)

})

navProject.addEventListener("click", () => {
  home.style.display = "none"
  skill.style.display = "none"
  about.style.display = "none"
  project.style.display = "grid"
  project.classList.add("bounce-in-top")
  setTimeout(() => {
    project.classList.remove("bounce-in-top")
  }, 1000)

})

  /* LeadLog embedded form. Paste after the form, or into your site's custom JavaScript. */
  (function () {
    'use strict';

    var FORM_KEY = "lf_5796930db33d3586fdf2e52a0c20a67c8e164966";
    var FALLBACK_ERROR = 'Something went wrong. Please try again.';

    function fire(form, name, detail, cancelable) {
      var event;
      try {
        event = new CustomEvent('leadlog:' + name, {
          bubbles: true,
          cancelable: !!cancelable,
          detail: detail
        });
      } catch (e) {
        return true;
      }
      return form.dispatchEvent(event);
    }

    function isGroup(control) {
      return control.type === 'checkbox' || control.type === 'radio';
    }

    /** The fieldset a checkbox or radio group lives in; null for the lone consent box. */
    function groupOf(control) {
      if (!isGroup(control)) return null;
      var fieldset = control.closest('fieldset');
      return fieldset && fieldset.querySelector('legend') ? fieldset : null;
    }

    /** What the visitor reads as this field's name: its label, or its group's legend. */
    function labelOf(control) {
      var group = groupOf(control);
      if (group) return group.querySelector('legend').textContent.trim();
      if (control.labels && control.labels.length) return control.labels[0].textContent.trim();
      return control.name;
    }

    /** The element an error sits under: the group, the consent box's label, or the control. */
    function anchorOf(control) {
      var group = groupOf(control);
      if (group) return group;
      if (control.type === 'checkbox') return control.closest('label') || control;
      return control;
    }

    /** The controls a visitor fills in — not the key, the honeypot, or the button. */
    function fieldsOf(form) {
      var seen = {};
      var out = [];
      Array.prototype.forEach.call(form.elements, function (control) {
        if (!control.name || control.disabled) return;
        if (control.type === 'hidden' || control.type === 'submit' || control.type === 'button') return;
        if (control.name === 'botcheck' || control.name === 'form_key') return;
        // One entry per group: a group is validated, and marked, as one field.
        var key = groupOf(control) ? 'group:' + control.name : 'one:' + control.name;
        if (seen[key]) return;
        seen[key] = true;
        out.push(control);
      });
      return out;
    }

    function digitsOf(value) {
      return value.replace(/[\s().-]/g, '');
    }

    /** The message for one field, or '' when it is fine. Wording matches /forms/submit. */
    function problemWith(form, control) {
      var group = groupOf(control);
      if (group) {
        var boxes = group.querySelectorAll('input[name="' + control.name + '"]');
        var ticked = Array.prototype.some.call(boxes, function (box) { return box.checked; });
        var required = group.hasAttribute('data-required') ||
          Array.prototype.some.call(boxes, function (box) { return box.required; });
        if (required && !ticked) {
          return control.type === 'radio'
            ? 'Please choose an option for “' + labelOf(control) + '”.'
            : 'Please choose at least one option for “' + labelOf(control) + '”.';
        }
        return '';
      }

      if (control.type === 'checkbox') {
        if (control.required && !control.checked) {
          return control.name === 'consent'
            ? 'Please tick the consent box to continue.'
            : 'Please tick “' + labelOf(control) + '” to continue.';
        }
        return '';
      }

      var value = control.value.trim();
      if (!value) {
        if (!control.required) return '';
        return control.tagName === 'SELECT'
          ? 'Please choose an option for “' + labelOf(control) + '”.'
          : 'Please fill in “' + labelOf(control) + '”.';
      }

      if (control.type === 'tel' && !/^\+?\d{7,15}$/.test(digitsOf(value))) {
        return 'Please enter a valid WhatsApp number.';
      }
      if (control.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address.';
      }
      if (control.type === 'url') {
        try {
          var url = new URL(value);
          if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new Error('scheme');
        } catch (e) {
          return 'Please enter a full web address, like https://example.com';
        }
      }
      if (control.validity && control.validity.badInput) {
        return control.type === 'number' ? 'Please enter a number.' : 'Please enter a valid date.';
      }
      if (control.validity && !control.validity.valid) {
        return control.validationMessage || 'Please check “' + labelOf(control) + '”.';
      }
      return '';
    }

    function errorIdFor(form, control) {
      var index = Array.prototype.indexOf.call(document.forms, form);
      return 'leadlog-error-' + index + '-' + control.name;
    }

    function controlsOf(control) {
      var group = groupOf(control);
      return group
        ? Array.prototype.slice.call(group.querySelectorAll('input[name="' + control.name + '"]'))
        : [control];
    }

    function showProblem(form, control, message) {
      var id = errorIdFor(form, control);
      var existing = document.getElementById(id);
      var targets = controlsOf(control);

      if (!message) {
        if (existing) existing.parentNode.removeChild(existing);
        targets.forEach(function (one) {
          one.removeAttribute('aria-invalid');
          one.removeAttribute('aria-describedby');
        });
        return;
      }

      var node = existing || document.createElement('p');
      node.id = id;
      node.className = 'leadlog-error';
      node.textContent = message;
      if (!existing) {
        var anchor = anchorOf(control);
        anchor.parentNode.insertBefore(node, anchor.nextSibling);
      }
      targets.forEach(function (one) {
        one.setAttribute('aria-invalid', 'true');
        one.setAttribute('aria-describedby', id);
      });
    }

    /** Every field checked and marked; returns the ones that failed, in form order. */
    function validate(form) {
      var failed = [];
      fieldsOf(form).forEach(function (control) {
        var message = problemWith(form, control);
        showProblem(form, control, message);
        if (message) failed.push(control);
      });
      return failed;
    }

    /** The form-level line above the button, for what the server said or a network failure. */
    function showFormMessage(form, message) {
      var node = form.querySelector('.leadlog-form-error');
      if (!message) {
        if (node) node.parentNode.removeChild(node);
        return;
      }
      if (!node) {
        node = document.createElement('p');
        node.className = 'leadlog-form-error';
        node.setAttribute('role', 'alert');
        var button = form.querySelector('[type="submit"]');
        if (button) button.parentNode.insertBefore(node, button);
        else form.appendChild(node);
      }
      node.textContent = message;
    }

    function setBusy(form, busy) {
      var button = form.querySelector('[type="submit"]');
      form.setAttribute('aria-busy', busy ? 'true' : 'false');
      if (!button) return;
      if (busy) {
        button.setAttribute('data-leadlog-label', button.textContent);
        button.textContent = form.getAttribute('data-leadlog-sending') || 'Sending…';
        button.disabled = true;
      } else {
        var label = button.getAttribute('data-leadlog-label');
        if (label !== null) button.textContent = label;
        button.removeAttribute('data-leadlog-label');
        button.disabled = false;
      }
    }

    function showSuccess(form, message) {
      var node = document.createElement('p');
      node.className = 'leadlog-success';
      node.setAttribute('role', 'status');
      node.setAttribute('tabindex', '-1');
      node.textContent = message || 'Thank you.';
      form.parentNode.insertBefore(node, form.nextSibling);
      form.reset();
      form.hidden = true;
      node.focus();
    }

    /** The browser's own submission, which skips the submit event and so skips this code. */
    function submitNatively(form) {
      HTMLFormElement.prototype.submit.call(form);
    }

    function send(form) {
      var data = new FormData(form);
      setBusy(form, true);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        credentials: 'omit'
      })
        .then(function (res) {
          return res.json().then(
            function (body) { return { res: res, body: body }; },
            function () { return { res: res, body: null }; }
          );
        })
        .then(function (result) {
          setBusy(form, false);
          var body = result.body || {};

          if (result.res.ok && body.data) {
            var detail = {
              message: body.data.message,
              redirectUrl: body.data.redirect_url || null
            };
            if (!fire(form, 'success', detail, true)) return;
            if (detail.redirectUrl) {
              window.location.assign(detail.redirectUrl);
              return;
            }
            showSuccess(form, detail.message);
            return;
          }

          var error = body.error || {};
          var message = error.message || FALLBACK_ERROR;
          showFormMessage(form, message);
          fire(form, 'error', { status: result.res.status, code: error.code || null, message: message });
        })
        .catch(function () {
          // No answer at all: blocked by the page's CSP, or offline. The browser can still post
          // the form itself, and its own page will say what happened.
          setBusy(form, false);
          submitNatively(form);
        });
    }

    function onSubmit(event) {
      var form = event.currentTarget;
      event.preventDefault();
      if (form.getAttribute('aria-busy') === 'true') return;

      showFormMessage(form, '');
      var failed = validate(form);
      if (failed.length) {
        failed[0].focus();
        fire(form, 'invalid', { fields: failed.map(function (control) { return control.name; }) });
        return;
      }

      if (!fire(form, 'submit', { data: new FormData(form) }, true)) return;
      send(form);
    }

    /** Once a field has been marked, it is re-checked as the visitor corrects it. */
    function onEdit(event) {
      var control = event.target;
      var form = event.currentTarget;
      if (!control || !control.name) return;
      if (!document.getElementById(errorIdFor(form, control))) return;
      showProblem(form, control, problemWith(form, control));
    }

    function enhance(form) {
      if (form.getAttribute('data-leadlog-ready') === 'true') return;
      if (!window.fetch || !window.FormData) return;
      form.setAttribute('data-leadlog-ready', 'true');
      // Our messages replace the browser's bubbles. Without this code the browser's own
      // validation still runs, because the attribute is only set here.
      form.noValidate = true;
      form.addEventListener('submit', onSubmit);
      form.addEventListener('input', onEdit);
      form.addEventListener('change', onEdit);
    }

    /** Enhances this form wherever it is on the page. Safe to call again if it is added later. */
    function init() {
      Array.prototype.forEach.call(document.forms, function (form) {
        var key = form.querySelector('input[name="form_key"]');
        if (key && key.value === FORM_KEY) enhance(form);
      });
    }

    window.LeadLogForms = window.LeadLogForms || {};
    window.LeadLogForms[FORM_KEY] = { init: init };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>author</key>
  <string>Ihor Oleksandrov</string>
  <key>colorSpaceName</key>
  <string>sRGB</string>
  <key>name</key>
  <string>Boxy Yesterday</string>
  <key>semanticClass</key>
  <string>boxy.yesterday.light</string>
  <key>settings</key>
  <array>
    <dict>
      <key>settings</key>
      <dict>
        <key>activeGuide</key>
        <string>#00000055</string>
        <key>background</key>
        <string>#ffffff</string>
        <key>caret</key>
        <string>#4d4d4c</string>
        <key>foreground</key>
        <string>#4d4d4c</string>
        <key>guide</key>
        <string>#00000025</string>
        <key>gutter</key>
        <string>#ffffff</string>
        <key>invisibles</key>
        <string>#8e908c</string>
        <key>lineHighlight</key>
        <string>#00000010</string>
        <key>popupCss</key>
        <string>
html {
  background-color: #eeeeee;
  color: #4d4d4c;
}

a {
  color: #4271ae;
}

.error,
.deleted {
  color: #c82829;
}

.success,
.inserted,
.name {
  color: #718c00;
}

.warning,
.modified {
  color: #c99e00;
}

.type {
  color: #3e999f;
  font-style: italic;
}

.param {
  color: #f5871f;
}

.current {
  text-decoration: underline;
}
</string>
        <key>selection</key>
        <string>#00000016</string>
        <key>selectionBorder</key>
        <string>#00000016</string>
        <key>stackGuide</key>
        <string>#00000040</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Comments</string>
      <key>scope</key>
      <string>comment, punctuation.definition.comment</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Variable</string>
      <key>scope</key>
      <string>variable, string constant.other.placeholder</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4d4d4c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Invalid</string>
      <key>scope</key>
      <string>invalid</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c82829</string>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Invalid</string>
      <key>scope</key>
      <string>invalid.deprecated</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#8959a8</string>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Keyword, Storage</string>
      <key>scope</key>
      <string>keyword, storage.type, storage.modifier</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Operator, Misc</string>
      <key>scope</key>
      <string>keyword.operator, constant.other.color, punctuation, meta.tag, punctuation.definition.tag, punctuation.separator.inheritance.php, punctuation.definition.tag.html, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.section.embedded, keyword.other.template, keyword.other.substitution</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#3e999f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Tag</string>
      <key>scope</key>
      <string>entity.name.tag, meta.tag.sgml, markup.deleted.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#df5b66</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Function, Special Method, Block Level</string>
      <key>scope</key>
      <string>entity.name.function, variable.function, support.function, keyword.other.special-method, meta.block-level</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Other Variable, String Link</string>
      <key>scope</key>
      <string>support.other.variable, string.other.link</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#df5b66</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Number, Constant, Function Argument, Tag Attribute, Embedded</string>
      <key>scope</key>
      <string>constant.numeric, constant.language, support.constant, constant.character, variable.parameter, keyword.other.unit</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#f5871f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>String, Symbols, Inherited Class, Markup Heading</string>
      <key>scope</key>
      <string>string, constant.other.symbol, constant.other.key, entity.other.inherited-class, markup.heading, markup.inserted.git_gutter, meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>normal</string>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Class, Support</string>
      <key>scope</key>
      <string>entity.name.class, entity.name.type.class, support.type, support.class, support.other.namespace.use.php, meta.use.php, support.other.namespace.php, markup.changed.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Sub-methods</string>
      <key>scope</key>
      <string>entity.name.module.js, variable.import.parameter.js, variable.other.class.js</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Language methods</string>
      <key>scope</key>
      <string>variable.language</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>entity.name.method.js</string>
      <key>scope</key>
      <string>entity.name.method.js</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>meta.method.js</string>
      <key>scope</key>
      <string>meta.class-method.js entity.name.function.js, variable.function.constructor</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Attributes</string>
      <key>scope</key>
      <string>entity.other.attribute-name</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Inserted</string>
      <key>scope</key>
      <string>markup.inserted</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Deleted</string>
      <key>scope</key>
      <string>markup.deleted</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Changed</string>
      <key>scope</key>
      <string>markup.changed</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Regular Expressions</string>
      <key>scope</key>
      <string>string.regexp</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#3e999f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Escape Characters</string>
      <key>scope</key>
      <string>constant.character.escape</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#3e999f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>URL</string>
      <key>scope</key>
      <string>*url*, *link*, *uri*</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>underline</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Search Results Nums</string>
      <key>scope</key>
      <string>constant.numeric.line-number.find-in-files - match</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#7f2a1d</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Search Results Lines</string>
      <key>scope</key>
      <string>entity.name.filename.find-in-files</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Decorators</string>
      <key>scope</key>
      <string>tag.decorator.js entity.name.tag.js, tag.decorator.js punctuation.definition.tag.js</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>ES7 Bind Operator</string>
      <key>scope</key>
      <string>source.js constant.other.object.key.js string.unquoted.label.js</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 8</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829bf</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 7</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271aebf</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 6</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00bf</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 5</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8bf</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 4</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#f5871f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 3</string>
      <key>scope</key>
      <string>source.json meta meta meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 2</string>
      <key>scope</key>
      <string>source.json meta meta meta meta.structure.dictionary.json string.quoted.double.json - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta meta meta.structure.dictionary.json punctuation.definition.string - meta meta meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 1</string>
      <key>scope</key>
      <string>source.json meta meta.structure.dictionary.json string.quoted.double.json - meta meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta meta.structure.dictionary.json punctuation.definition.string - meta meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>JSON Key - Level 0</string>
      <key>scope</key>
      <string>source.json meta.structure.dictionary.json string.quoted.double.json - meta.structure.dictionary.json meta.structure.dictionary.value.json string.quoted.double.json, source.json meta.structure.dictionary.json punctuation.definition.string - meta.structure.dictionary.json meta.structure.dictionary.value.json punctuation.definition.string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Plain</string>
      <key>scope</key>
      <string>text.html.markdown, punctuation.definition.list_item.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4d4d4c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Markup Raw Inline</string>
      <key>scope</key>
      <string>text.html.markdown markup.raw.inline</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
        <key>foreground</key>
        <string>#4d4d4ccc</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Line Break</string>
      <key>scope</key>
      <string>text.html.markdown meta.dummy.line-break</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#00000050</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Heading</string>
      <key>scope</key>
      <string>markdown.heading, markup.heading | markup.heading entity.name, markup.heading.markdown punctuation.definition.heading.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#df5b66</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Italic</string>
      <key>scope</key>
      <string>markup.italic, markup.italic string</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Bold</string>
      <key>scope</key>
      <string>markup.bold, markup.bold string</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Bold &amp; Italic</string>
      <key>scope</key>
      <string>markup.bold markup.italic, markup.italic markup.bold, markup.quote markup.bold, markup.bold markup.italic string, markup.italic markup.bold string, markup.quote markup.bold string</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold italic</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Underline</string>
      <key>scope</key>
      <string>markup.underline</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>underline</string>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Strike</string>
      <key>scope</key>
      <string>markup.strike</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>strike</string>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Blockquote</string>
      <key>scope</key>
      <string>markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000016</string>
        <key>fontStyle</key>
        <string />
        <key>foreground</key>
        <string>#00000016</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Quote</string>
      <key>scope</key>
      <string>markup.quote</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Link</string>
      <key>scope</key>
      <string>string.other.link.title.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Link Description</string>
      <key>scope</key>
      <string>string.other.link.description.title.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Link Anchor</string>
      <key>scope</key>
      <string>constant.other.reference.link.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Raw Block</string>
      <key>scope</key>
      <string>markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
        <key>foreground</key>
        <string>#4d4d4ccc</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Raw Block Fenced</string>
      <key>scope</key>
      <string>markup.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Fenced Bode Block</string>
      <key>scope</key>
      <string>punctuation.definition.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Fenced Bode Block Variable</string>
      <key>scope</key>
      <string>markup.raw.block.fenced.markdown, variable.language.fenced.markdown, punctuation.section.class.end</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4d4d4c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Fenced Bode Block Punctuation</string>
      <key>scope</key>
      <string>punctuation.definition.fenced.markdown, meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string />
        <key>foreground</key>
        <string>#00000050</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Fenced Language</string>
      <key>scope</key>
      <string>variable.language.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string />
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Separator</string>
      <key>scope</key>
      <string>meta.separator</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markup - Table</string>
      <key>scope</key>
      <string>markup.table</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000008</string>
        <key>foreground</key>
        <string>#4d4d4ccc</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Punctuation Definition</string>
      <key>scope</key>
      <string>text.html.markdown punctuation.definition, text.html.markdown.note punctuation.definition.list_item.markdown, markup.table.markdown punctuation.definition.table.vertical-line.markdown, text.html.markdown markup.checkbox.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string />
        <key>foreground</key>
        <string>#00000050</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - HTML Punctuation Definition</string>
      <key>scope</key>
      <string>text.html.markdown meta.disable-markdown punctuation.definition</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#3e999f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - TODO Done</string>
      <key>scope</key>
      <string>punctuation.definition.list_item.todo.done</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - TODO Cancelled</string>
      <key>scope</key>
      <string>punctuation.definition.list_item.todo.cancelled</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - TODO GitHub Checkbox</string>
      <key>scope</key>
      <string>markup.checkbox.markdown markup.checkbox.checked_symbol.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Title</string>
      <key>scope</key>
      <string>markup.admonition.markdown string.other.admonition.title.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#4d4d4c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Header</string>
      <key>scope</key>
      <string>markup.admonition.markdown markup.admonition.header.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#794b9650</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Body</string>
      <key>scope</key>
      <string>markup.admonition.markdown markup.admonition.body.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#794b9615</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Punctuation</string>
      <key>scope</key>
      <string>markup.admonition.markdown punctuation.definition.admonition.markdown, markup.admonition.markdown punctuation.definition.heading,markup.admonition.markdown punctuation.definition.table.vertical-line, markup.admonition.markdown punctuation.definition.table.horizontal-line, markup.admonition.markdown punctuation.definition.table.alignments, markup.admonition.markdown punctuation.definition.heading, markup.admonition.markdown punctuation.definition.bold, markup.admonition.markdown punctuation.definition.italic, markup.admonition.markdown punctuation.definition.list_item, markup.admonition.markdown punctuation.definition.raw, markup.admonition.markdown markup.checkbox.markdown, markup.admonition.markdown punctuation.definition.list_item.todo.pending, markup.admonition.markdown meta.link punctuation.definition, markup.admonition.markdown meta.link.inline markup.underline.link, markup.admonition.markdown meta.link.reference.markdown constant.other.reference.link.markdown, markup.admonition.markdown punctuation.definition.entity.html, markup.admonition.markdown meta.separator.markdown, markup.admonition.markdown markup.table.markdown punctuation.definition.table.vertical-line.markdown, markup.admonition.markdown meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#794b9675</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Type</string>
      <key>scope</key>
      <string>markup.admonition.markdown entity.name.admonition.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#794b96</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Element Background</string>
      <key>scope</key>
      <string>markup.admonition.markdown markup.table, markup.admonition.markdown markup.raw, markup.admonition.markdown markup.raw.block.fenced meta.language, markup.admonition.markdown punctuation.definition.blockquote.markdown, markup.admonition.markdown meta.separator, markup.admonition.markdown markup.raw.inline, markup.admonition.markdown markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#794b9625</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Quote</string>
      <key>scope</key>
      <string>markup.admonition.markdown markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#794b9635</string>
        <key>foreground</key>
        <string>#794b9635</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Header (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint markup.admonition.header.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4271ae50</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Body (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint markup.admonition.body.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4271ae15</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Punctuation (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint punctuation.definition.admonition.markdown, markup.admonition.markdown.hint punctuation.definition.heading,markup.admonition.markdown.hint punctuation.definition.table.vertical-line, markup.admonition.markdown.hint punctuation.definition.table.horizontal-line, markup.admonition.markdown.hint punctuation.definition.table.alignments, markup.admonition.markdown.hint punctuation.definition.heading, markup.admonition.markdown.hint punctuation.definition.bold, markup.admonition.markdown.hint punctuation.definition.italic, markup.admonition.markdown.hint punctuation.definition.list_item, markup.admonition.markdown.hint punctuation.definition.raw, markup.admonition.markdown.hint markup.checkbox.markdown, markup.admonition.markdown.hint punctuation.definition.list_item.todo.pending, markup.admonition.markdown.hint meta.link punctuation.definition, markup.admonition.markdown.hint meta.link.inline markup.underline.link, markup.admonition.markdown.hint meta.link.reference.markdown constant.other.reference.link.markdown, markup.admonition.markdown.hint punctuation.definition.entity.html, markup.admonition.markdown.hint meta.separator.markdown, markup.admonition.markdown.hint markup.table.markdown punctuation.definition.table.vertical-line.markdown, markup.admonition.markdown.hint meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae75</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Type (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint entity.name.admonition.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Element Background (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint markup.table, markup.admonition.markdown.hint markup.raw, markup.admonition.markdown.hint markup.raw.block.fenced meta.language, markup.admonition.markdown.hint punctuation.definition.blockquote.markdown, markup.admonition.markdown.hint meta.separator, markup.admonition.markdown.hint markup.raw.inline, markup.admonition.markdown.hint markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4271ae25</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Quote (Hint)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.hint markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4271ae35</string>
        <key>foreground</key>
        <string>#4271ae35</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Header (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning markup.admonition.header.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c99e0050</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Body (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning markup.admonition.body.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c99e0015</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Punctuation (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning punctuation.definition.admonition.markdown, markup.admonition.markdown.warning punctuation.definition.heading,markup.admonition.markdown.warning punctuation.definition.table.vertical-line, markup.admonition.markdown.warning punctuation.definition.table.horizontal-line, markup.admonition.markdown.warning punctuation.definition.table.alignments, markup.admonition.markdown.warning punctuation.definition.heading, markup.admonition.markdown.warning punctuation.definition.bold, markup.admonition.markdown.warning punctuation.definition.italic, markup.admonition.markdown.warning punctuation.definition.list_item, markup.admonition.markdown.warning punctuation.definition.raw, markup.admonition.markdown.warning markup.checkbox.markdown, markup.admonition.markdown.warning punctuation.definition.list_item.todo.pending, markup.admonition.markdown.warning meta.link punctuation.definition, markup.admonition.markdown.warning meta.link.inline markup.underline.link, markup.admonition.markdown.warning meta.link.reference.markdown constant.other.reference.link.markdown, markup.admonition.markdown.warning punctuation.definition.entity.html, markup.admonition.markdown.warning meta.separator.markdown, markup.admonition.markdown.warning markup.table.markdown punctuation.definition.table.vertical-line.markdown, markup.admonition.markdown.warning meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e0075</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Type (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning entity.name.admonition.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Element Background (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning markup.table, markup.admonition.markdown.warning markup.raw, markup.admonition.markdown.warning markup.raw.block.fenced meta.language, markup.admonition.markdown.warning punctuation.definition.blockquote.markdown, markup.admonition.markdown.warning meta.separator, markup.admonition.markdown.warning markup.raw.inline, markup.admonition.markdown.warning markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c99e0025</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Quote (Warning)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.warning markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c99e0035</string>
        <key>foreground</key>
        <string>#c99e0035</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Header (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger markup.admonition.header.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c8282950</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Body (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger markup.admonition.body.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c8282915</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Punctuation (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger punctuation.definition.admonition.markdown, markup.admonition.markdown.danger punctuation.definition.heading,markup.admonition.markdown.danger punctuation.definition.table.vertical-line, markup.admonition.markdown.danger punctuation.definition.table.horizontal-line, markup.admonition.markdown.danger punctuation.definition.table.alignments, markup.admonition.markdown.danger punctuation.definition.heading, markup.admonition.markdown.danger punctuation.definition.bold, markup.admonition.markdown.danger punctuation.definition.italic, markup.admonition.markdown.danger punctuation.definition.list_item, markup.admonition.markdown.danger punctuation.definition.raw, markup.admonition.markdown.danger markup.checkbox.markdown, markup.admonition.markdown.danger punctuation.definition.list_item.todo.pending, markup.admonition.markdown.danger meta.link punctuation.definition, markup.admonition.markdown.danger meta.link.inline markup.underline.link, markup.admonition.markdown.danger meta.link.reference.markdown constant.other.reference.link.markdown, markup.admonition.markdown.danger punctuation.definition.entity.html, markup.admonition.markdown.danger meta.separator.markdown, markup.admonition.markdown.danger markup.table.markdown punctuation.definition.table.vertical-line.markdown, markup.admonition.markdown.danger meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c8282975</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Type (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger entity.name.admonition.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Element Background (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger markup.table, markup.admonition.markdown.danger markup.raw, markup.admonition.markdown.danger markup.raw.block.fenced meta.language, markup.admonition.markdown.danger punctuation.definition.blockquote.markdown, markup.admonition.markdown.danger meta.separator, markup.admonition.markdown.danger markup.raw.inline, markup.admonition.markdown.danger markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c8282925</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Quote (Danger)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.danger markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#c8282935</string>
        <key>foreground</key>
        <string>#c8282935</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Header (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention markup.admonition.header.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#718c0050</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Body (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention markup.admonition.body.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#718c0015</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Punctuation (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention punctuation.definition.admonition.markdown, markup.admonition.markdown.attention punctuation.definition.heading,markup.admonition.markdown.attention punctuation.definition.table.vertical-line, markup.admonition.markdown.attention punctuation.definition.table.horizontal-line, markup.admonition.markdown.attention punctuation.definition.table.alignments, markup.admonition.markdown.attention punctuation.definition.heading, markup.admonition.markdown.attention punctuation.definition.bold, markup.admonition.markdown.attention punctuation.definition.italic, markup.admonition.markdown.attention punctuation.definition.list_item, markup.admonition.markdown.attention punctuation.definition.raw, markup.admonition.markdown.attention markup.checkbox.markdown, markup.admonition.markdown.attention punctuation.definition.list_item.todo.pending, markup.admonition.markdown.attention meta.link punctuation.definition, markup.admonition.markdown.attention meta.link.inline markup.underline.link, markup.admonition.markdown.attention meta.link.reference.markdown constant.other.reference.link.markdown, markup.admonition.markdown.attention punctuation.definition.entity.html, markup.admonition.markdown.attention meta.separator.markdown, markup.admonition.markdown.attention markup.table.markdown punctuation.definition.table.vertical-line.markdown, markup.admonition.markdown.attention meta.definition.language.raw.block.fenced.markdown</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c0075</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Section Type (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention entity.name.admonition.markdown</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>bold</string>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Element Background (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention markup.table, markup.admonition.markdown.attention markup.raw, markup.admonition.markdown.attention markup.raw.block.fenced meta.language, markup.admonition.markdown.attention punctuation.definition.blockquote.markdown, markup.admonition.markdown.attention meta.separator, markup.admonition.markdown.attention markup.raw.inline, markup.admonition.markdown.attention markup.raw.block</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#718c0025</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Markdown - Admonition Quote (Attention)</string>
      <key>scope</key>
      <string>markup.admonition.markdown.attention markup.quote punctuation.definition.blockquote.markdown</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#718c0035</string>
        <key>foreground</key>
        <string>#718c0035</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>AceJump Label</string>
      <key>scope</key>
      <string>acejump.label</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#528bff</string>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>SublimeLinter Warning</string>
      <key>scope</key>
      <string>sublimelinter.mark.warning</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>SublimeLinter Gutter Mark</string>
      <key>scope</key>
      <string>sublimelinter.gutter-mark</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>SublimeLinter Error</string>
      <key>scope</key>
      <string>sublimelinter.mark.error</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>GitGutter Ignored</string>
      <key>scope</key>
      <string>markup.ignored.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>GitGutter Untracked</string>
      <key>scope</key>
      <string>markup.untracked.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8e908c</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>GitGutter Inserted</string>
      <key>scope</key>
      <string>markup.inserted.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>GitGutter Changed</string>
      <key>scope</key>
      <string>markup.changed.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>GitGutter Deleted</string>
      <key>scope</key>
      <string>markup.deleted.git_gutter</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Default</string>
      <key>scope</key>
      <string>brackethighlighter.default</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#8959a8</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Unmatched</string>
      <key>scope</key>
      <string>brackethighlighter.unmatched</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c82829</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Curly</string>
      <key>scope</key>
      <string>brackethighlighter.curly</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#794b96</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Round</string>
      <key>scope</key>
      <string>brackethighlighter.round</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#c99e00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Square</string>
      <key>scope</key>
      <string>brackethighlighter.square</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#4271ae</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Angle</string>
      <key>scope</key>
      <string>brackethighlighter.angle</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#f5871f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Tag</string>
      <key>scope</key>
      <string>brackethighlighter.tag</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#3e999f</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Bracket Highlighter Quote</string>
      <key>scope</key>
      <string>brackethighlighter.quote</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#718c00</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Gutter Color Fix</string>
      <key>scope</key>
      <string>gutter_color, mcol</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_gutter</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#000000</string>
        <key>foreground</key>
        <string>#ffffff</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_FEFEFEFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#FEFEFEFF</string>
        <key>foreground</key>
        <string>#7E7E7EFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_000000FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#000000FF</string>
        <key>foreground</key>
        <string>#808080FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_D8D8D8FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#D8D8D8FF</string>
        <key>foreground</key>
        <string>#585858FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_4E4E4EFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4E4E4EFF</string>
        <key>foreground</key>
        <string>#CECECEFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_D61212FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#D61212FF</string>
        <key>foreground</key>
        <string>#CCCCCCFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_990000FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#990000FF</string>
        <key>foreground</key>
        <string>#ADADADFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_FF0000FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#FF0000FF</string>
        <key>foreground</key>
        <string>#CCCCCCFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_4987CEFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#4987CEFF</string>
        <key>foreground</key>
        <string>#FCFCFCFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_D9D9D9FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#D9D9D9FF</string>
        <key>foreground</key>
        <string>#595959FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_CCCCCCFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#CCCCCCFF</string>
        <key>foreground</key>
        <string>#4C4C4CFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_EFEFEFFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#EFEFEFFF</string>
        <key>foreground</key>
        <string>#6F6F6FFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_FAFAFAFF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#FAFAFAFF</string>
        <key>foreground</key>
        <string>#7A7A7AFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_666666FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#666666FF</string>
        <key>foreground</key>
        <string>#E6E6E6FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_F2F2F2FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#F2F2F2FF</string>
        <key>foreground</key>
        <string>#727272FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_0096D6FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#0096D6FF</string>
        <key>foreground</key>
        <string>#F0F0F0FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_E47A34FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#E47A34FF</string>
        <key>foreground</key>
        <string>#111111FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_2D7F58FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#2D7F58FF</string>
        <key>foreground</key>
        <string>#E2E2E2FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_00000033</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#00000033</string>
        <key>foreground</key>
        <string>#4C4C4CFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_57A881FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#57A881FF</string>
        <key>foreground</key>
        <string>#0B0B0BFF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_EF7B27FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#EF7B27FF</string>
        <key>foreground</key>
        <string>#141414FF</string>
      </dict>
    </dict>
    <dict>
      <key>scope</key>
      <string>col_F6F6F6FF</string>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>#F6F6F6FF</string>
        <key>foreground</key>
        <string>#767676FF</string>
      </dict>
    </dict>
  <dict>
            <key>name</key>
            <string>SublimePythonIDE Error</string>
            <key>scope</key>
            <string>sublimepythonide.mark.error</string>
            <key>settings</key>
            <dict>
                <key>foreground</key>
                <string>#DA2000</string>
            </dict>
        </dict><dict>
            <key>name</key>
            <string>SublimePythonIDE Gutter Mark</string>
            <key>scope</key>
            <string>sublimepythonide.gutter-mark</string>
            <key>settings</key>
            <dict>
                <key>foreground</key>
                <string>#FFFFFF</string>
            </dict>
        </dict><dict>
            <key>name</key>
            <string>SublimePythonIDE Warning</string>
            <key>scope</key>
            <string>sublimepythonide.mark.warning</string>
            <key>settings</key>
            <dict>
                <key>foreground</key>
                <string>#EDBA00</string>
            </dict>
        </dict></array>
  <key>uuid</key>
  <string>644320da-6e11-4c6d-9050-f2ed6b8c5049</string>
</dict>
</plist>`

var plist = require('plist');

var val = plist.parse(xml);
console.log(val);  // "Hello World!"

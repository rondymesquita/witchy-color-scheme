const plist = require('plist');

const build = (colorSet, name) => {
  return plist.build({
        'name': `${name} ${colorSet.name}`,
        'settings': [
          {
            'settings': {
              'background': colorSet.colors.shade0,
              'caret': colorSet.colors.accent6,
              'foreground': colorSet.colors.accent2,
              'invisibles': colorSet.colors.shade1,
              'lineHighlight': colorSet.colors.shade1,
              'selection': colorSet.colors.shade2,
              'selectionBorder': colorSet.colors.shade5,
              'findHighlight': colorSet.colors.accent2,
              'findHighlightForeground': colorSet.colors.shade0,
              'activeGuide': colorSet.colors.accent1,
              'bracketsForeground': `${colorSet.colors.shade6}7F`,
              'bracketsOptions': 'stippled_underline',
              'bracketsContentsForeground': `${colorSet.colors.shade6}7F`,
              'tagsOptions': 'stippled_underline',
            },
          },
          {
            'name': 'Comment',
            'scope': 'comment',
            'settings': {
              'foreground': colorSet.colors.shade2,
            },
          },
          {
            'name': 'Constant',
            'scope': 'constant',
            'settings': {
              'foreground': colorSet.colors.accent7,
            },
          },
          {
            'name': 'Entity',
            'scope': 'entity',
            'settings': {
              'foreground': colorSet.colors.accent4,
            },
          },
          {
            'name': 'Invalid',
            'scope': 'invalid',
            'settings': {
              'background': colorSet.colors.accent0,
              'foreground': colorSet.colors.shade1,
            },
          },
          {
            'name': 'Keyword',
            'scope': 'keyword',
            'settings': {
              'foreground': colorSet.colors.accent6,
            },
          },
          {
            'name': 'Storage',
            'scope': 'storage',
            'settings': {
              'foreground': colorSet.colors.accent7,
            },
          },
          {
            'name': 'String',
            'scope': 'string',
            'settings': {
              'foreground': colorSet.colors.accent3,
            },
          },
          {
            'name': 'String',
            'scope': 'string.unquoted',
            'settings': {
              'foreground': colorSet.colors.accent8,
            },
          },
          {
            'name': 'Support',
            'scope': 'support',
            'settings': {
              'foreground': colorSet.colors.accent4,
            },
          },
          {
            'name': 'Variable',
            'scope': 'variable',
            'settings': {
              'foreground': colorSet.colors.shade7,
            },
          },
          {
            'name': 'Markup Heading',
            'scope': 'markup.heading',
            'settings': {
              'foreground': colorSet.colors.accent4,
            },
          },
          {
            'name': 'Markup Deleted',
            'scope': 'markup.deleted',
            'settings': {
              'foreground': colorSet.colors.accent0,
            },
          },
          {
            'name': 'Markup Inserted',
            'scope': 'markup.inserted',
            'settings': {
              'foreground': colorSet.colors.accent8,
            },
          },
          {
            'name': 'Markup Changed',
            'scope': 'markup.changed',
            'settings': {
              'foreground': colorSet.colors.accent2,
            },
          },
          {
            'name': 'Markup Underline',
            'scope': 'markup.underline',
            'settings': {
              'fontStyle': 'underline',
            },
          },
          {
            'name': 'Markup Underline Link',
            'scope': 'markup.underline.link',
            'settings': {
              'foreground': colorSet.colors.accent5,
            },
          },
          {
            'name': 'Markup List',
            'scope': 'markup.list',
            'settings': {
              'foreground': colorSet.colors.shade7,
            },
          },
          {
            'name': 'Markup Raw',
            'scope': 'markup.raw',
            'settings': {
              'foreground': colorSet.colors.accent7,
            },
          },
        ],
  });
}

module.exports = {
  build
}

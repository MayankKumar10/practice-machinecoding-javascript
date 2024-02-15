export const explorer = {
  name: "root",
  isFolder: true,
  items:[
    {
      name: "public",
      isFolder: true,
      items:[
        {
          name: "public 1",
          isFolder: true,
          items:[
            {
              name: "public 1 file 1",
              isFolder: false,
            },
            
            {
              name: "public 1 file 2",
              isFolder: false,
            }


          ]
        },
        {
          name: "public 2",
          isFolder: true,
          items:[
            {
              name: "public 2 file 1",
              isFolder: false,
            },
            
            {
              name: "public 2 file 2",
              isFolder: false,
            }

          ]
        }
      ]
    },

    {
      name: "src",
      isFolder: true,
      items:[
        {
          name: "data ",
          isFolder: true,
          items:[
            {
              name: "data 1 file 1",
              isFolder: false,
            },
            
            {
              name: "data 1 file 2",
              isFolder: false,
            }
          ]
        },
        {
          name: "component 1",
          isFolder: true,
          items:[
            {
              name: "component 1 file 1",
              isFolder: false,
            },
            
            {
              name: "component 1 file 2",
              isFolder: false,
            }

          ]
        }
      ]
    },
    {
      name: 'json.package',
      isFolder: false
    },
    {
      name: 'readme.md',
      isFolder: false
    }
  ]
}
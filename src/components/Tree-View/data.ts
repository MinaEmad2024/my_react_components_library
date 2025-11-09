export interface MenuItemData {
    id: number;
    name: string;
    // The children property is an array of items of the *same* interface type
    children?: MenuItemData[]; 
} 


const data :MenuItemData[] = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      {
        id: 11,
        name: "Child 1.1",
        children: [
          { id: 111, name: "Grandchild 1.1.1" },
          { id: 112, name: "Grandchild 1.1.2" },
        ],
      },
      {
        id: 12,
        name: "Child 1.2",
        children: [{ id: 121, name: "Grandchild 1.2.1" }],
      },
    ],
  },
  {
    id: 2,
    name: "Parent 2",
    children: [
      {
        id: 21,
        name: "Child 2.1",
        children: [], // No grandchildren for this child
      },
    ],
  },
  {
    id: 3,
    name: "Parent 3",
    children: [
      {
        id: 31,
        name: "Child 3.1",
        children: [
          { id: 311, name: "Grandchild 3.1.1" },
          { id: 312, name: "Grandchild 3.1.2" },
          { id: 313, name: "Grandchild 3.1.3" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Parent 4",
    children: [], // No children for this parent
  },
];

export default data 
export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/DanielAbrante.png",
      name: "Daniel Abrante",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera, mais um tutorial aqui" },
      {
        type: "paragraph",
        content:
          "Não sabe como criar uma pasta pelo terminal do Linux? É fácil! Abra o terminal e digite o comando mkdir <nome da pasta> no diretório que você quer criar.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-17 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/torvalds.png",
      name: "Linus Torvalds",
      role: "Linux Creator",
    },
    content: [
      { type: "paragraph", content: "I don't use Windows" },
      {
        type: "paragraph",
        content: "...",
      },
      { type: "link", content: "linux.kernel/torvalds" },
    ],
    publishedAt: new Date("2017-10-20 08:38:00"),
  },
];

const emails = [
  {
    sender: "John Doe",
    content: "Hello, this is an email",
    date: "2021-06-01",
    label: false,
  },
  {
    sender: "Jane Doe",
    content: "Hello, this is another email",
    date: "2021-06-02",
    label: false,
  },
  {
    sender: "John Doe",
    content: "Hello, this is yet another email",
    date: "2021-06-03",
    label: true,
  },
  {
    // Long content
    sender: "Alice",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio nec orci ultricies aliquam. Donec auctor, risus ut vehicula ultricies, nunc mi egestas metus, nec ultricies lacus mi vel nunc. Curabitur ac eros nec justo aliquet luctus. Nullam vel arcu in sapien",
    date: "2021-06-04",
    label: false,
  },
];

function sortEmails(emails) {
  return emails.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export default sortEmails(emails);

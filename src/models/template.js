class Template {
  constructor(attributes = {}) {
    Object.assign(this, attributes)
  }

  static fromList(templates = []) {
    return templates.map((t) => new Template(t))
  }

  static getDummyList() {
    return Template.fromList([
      {
        id: "001",
        name: "We'd like to help you put your overdue",
        fromName: "Brooke Davis",
        fromAddress: "brooke@indebted.co",
        subject: "Welcome to indebted",
        layoutName: "TextEmailLayout",
        layoutAttributes: {
          Body:
            "Hi {{.FirstName}},\
              We'd like to help you put your overdue {{.ClientName}} account behind you.\
              This month only you can settle your AUD  {{.Balance}} by making a discounted payment of 70% to close your account!",
        },
        type: "Email",
        enabled: true,
        created: "2020-01-11T03:10:43.200Z",
      },
      {
        id: "002",
        name: "will send you a discounted payment offer",
        fromName: "Tom Cat",
        fromAddress: "tom@indebted.co",
        subject: "Pay your balance amount",
        layoutName: "TextEmailLayout",
        layoutAttributes: {
          Body:
            "Hi {{.FirstName}},\
              Simply reply to this email and a member of our team will send you a discounted payment offer to close the account.",
        },
        type: "Email",
        enabled: true,
        created: "2020-01-21T03:10:43.200Z",
      },
      {
        id: "003",
        name: "InDebted is offering a 30% discount on your outstanding account",
        Body:
          "Hi {{.FirstName}}, We'd like to help you put your overdue {{.ClientName}} account behind you. \
          InDebted is offering a 30% discount on your outstanding account of {{.Balance}} if paid in full by \
          the end of the month! Simply reply to this SMS and a member of our team will send you a discounted \
          payment offer to close the account. InDebted Australia 1300 144 566",
        type: "SMS",
        enabled: true,
        created: "2020-02-11T03:10:43.200Z",
      },
    ])
  }
}

export default Template

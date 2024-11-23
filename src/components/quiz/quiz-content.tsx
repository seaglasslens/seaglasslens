// quiz contents
export const content = {
  questions: [
    {
      dialogue:
        "You made it! Hi, I'm Turtle! We've been waiting for you! What should we call you?",
      options: [],
      response: [],
    },

    {
      dialogue:
        "Welcome to Nautilus Diaries, name! We're excited to show you around! Let's get to know you more!",
      options: [
        ["Hooray! Let's go!", "Love your excitement!"],
        ["Where are we going?", "Hehe, you'll see!"],
      ],
      response: [
        [2, 3, 4, 7, 8, 11],
        [0, 1, 5, 6, 9, 10],
      ],
    },

    {
      dialogue:
        "token Oh, you must be parched... Let me get you something to drink. What would you like?",
      options: [
        ["Water is fine!", "We're underwater... but alrighty!"],
        [
          "Can I get an iced coffee?",
          "Of course! I might need some myself too...",
        ],
        ["Maybe a warm cup of tea.", "How cozy! One hot tea coming right up!"],
        ["Something sweet!", "We got ourselves a sweet tooth!"],
      ],
      response: [
        [1, 3, 4, 6, 8, 9, 10, 11],
        [1, 3, 4, 5, 8, 10],
        [0, 1, 6, 9, 10, 11],
        [2, 5, 7, 8],
      ],
    },

    {
      dialogue:
        "token *clink* Here you go, name! I've been meaning to ask... where are you from?",
      options: [
        [
          "Somewhere with a lot of shells!",
          "How lovely! Say hi to Hermit Crab for me!",
        ],
        [
          "Somewhere with a lot of birds~",
          "Your mornings must be lively! How wonderful!",
        ],
        [
          "Somewhere the waves settle...",
          "A bit of a poet, aren't you? I love it!",
        ],
        ["Somewhere colorful!", "Dance party!!! You must have so much fun!"],
        ["Somewhere with lots of green!", "Green! Just like me, haha!"],
        ["Somewhere fishy...", "Oh... how suspicious of you... Love it!!"],
        [
          "Somewhere dark.",
          "Oh wow! Shell-phone service must be hard to get there.",
        ],
        [
          "Somewhere shimmery!",
          "Woah! You must need sunglasses for that, haha!",
        ],
      ],
      response: [[3], [3, 10, 11], [9], [1, 2], [3, 7, 8], [4, 6], [0], [5]],
    },

    {
      dialogue: "token How do you usually spend your days there?",
      options: [
        [
          "Playing sports with my friends!",
          "Whoa! Athletic! My friends say I could pick up the pace...",
        ],
        [
          "Appreciating nature...",
          "Me too! I spend a lot of time watching kelp sway.",
        ],
        ["Hiding. I'm shy.", "I understand! Sometimes I like to shell up too."],
        ["Reading my favorite book.", "How cozy! So many worlds to see..."],
        [
          "Making art and messes. :)",
          "How fun! I'd love to see what you make!",
        ],
        ["Crossword puzzles.", "Whoa! You must have a big vocabulary."],
        [
          "Sharing a laugh with good company!",
          "Wonderful! We'll have many laughs to share!",
        ],
      ],
      response: [
        [3, 5, 7],
        [3, 4, 5, 8, 11],
        [9, 10],
        [0, 1, 4, 10],
        [2, 9],
        [1, 4, 6],
        [3, 4, 5, 6, 7, 8],
      ],
    },

    {
      dialogue: "token Oh! Is that your bag? What did you bring with you?",
      options: [
        ["shiny jar", "shiny jar"],
        ["gold key", "gold key"],
        ["stopwatch", "stopwatch"],
        ["pink shell", "pink shell"],
        ["fish coin", "fish coin"],
        ["sparkly ring", "sparkly ring"],
      ],
      response: [
        [0, 3, 5, 8],
        [0, 3, 5, 6, 9, 11],
        [0, 3, 4, 6, 9, 10, 11],
        [1, 2, 7, 8, 10],
        [3, 4, 7, 10, 11],
        [0, 5, 8],
      ],
    },

    {
      dialogue:
        "A token? Wow! So sparkly! What a wonderful day out! Hmm... Let's go for a walk. Where should we go?",
      options: [
        ["The beach!", "Yay let's go! Bring your sandals!"],
        ["The park!", "Ok!! I'll bring a picnic blanket!"],
        ["The carnival!", "Hooray! I hope we win a prize!"],
        ["The garden!", "Yay! Sweet nature!"],
        ["The outdoor mall!", "Awesome! I do need new shoes..."],
      ],
      response: [
        [3, 4, 7, 8, 9, 10, 11],
        [0, 1, 3, 4, 6, 9, 10, 11],
        [1, 2, 5, 7],
        [0, 2, 4, 5, 8, 10, 11],
        [5, 7],
      ],
    },

    {
      dialogue:
        "token It's so great spending time with you, name. I know we've been chatting for a while. Are you getting tired?",
      options: [
        ["Not at all! Love to chat. :)", "Hooray! Let's keep chatting away!"],
        ["Just a bit! I don't mind though...", "Aw! We're almost there!"],
      ],
      response: [
        [2, 3, 5, 6, 7, 8, 11],
        [0, 1, 4, 9, 10],
      ],
    },

    {
      dialogue:
        "token While we walk, let's listen to some music. What kind of music do you want to listen to?",
      options: [
        ["Relaxing beats! It lulls me...", "Rhythmic, I-"],
        ["Classic R&B! So soothing.", "Soulful, I-"],
        ["Indie rock! <3", "I love indie-"],
        ["Pop! Love to feel excited!", "So fun, I-"],
        ["Jazz~", "I always like-"],
        ["Shoegaze.", "Shoegaze! I also wear-"],
        ["Hip-hop!", "Hip-hop! I love-"],
      ],
      response: [
        [3, 6],
        [3, 11],
        [0, 4, 5, 8, 9, 10],
        [2, 5, 7, 8],
        [0, 1, 4, 5, 6, 9, 10],
        [0, 1, 4, 8, 9, 10],
        [2, 3, 7],
      ],
    },

    {
      dialogue: "token*thud* Whoops! I fell... how embarrassing of me!",
      options: [
        ["Hahaha!!!", "Hahaha! Haha..."],
        ["Are you okay?", "Yep! Just a little scratch!"],
      ],
      response: [
        [2, 3, 4, 7, 8, 11],
        [0, 1, 5, 6, 9, 10],
      ],
    },

    {
      dialogue:
        "token Well, thanks for helping me up, oh gosh. While I was on my shell, I saw this cloud... what do you think it looks like?",
      options: [
        ["Tempura shrimp... yum!", "I'm getting hungry"],
        ["A crab... how handsome.", "Handsome?"],
        ["Bubble bath!! Yay!!!", "Lalala~ Fun!"],
        ["A wandering sea dragon~", "Whoa!! Majestic!"],
        ["Just a cloud.", "A realist, aren't you?"],
        ["What cloud?", "You're so silly"],
      ],
      response: [
        [1, 2, 3, 4, 6, 7, 8, 9, 11],
        [1, 3, 4, 5, 6, 7, 11],
        [0, 1, 2, 5, 6, 7, 8, 10, 11],
        [0, 1],
        [3, 4, 9, 10],
        [0, 7, 8, 11],
      ],
    },

    {
      dialogue:
        "token... Oh! Would you look at the time. I loved talking to you, name! I feel like I can see you for who you are...",
      options: [["Who am I?", ""]],
      response: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]],
    },
  ],
};

// phrases to update dialogue based on user's choice from previous question
export const initialTokens: string[] = [];

// user's name
export const initialName: string = "";

// scores of all sea critters to be updated every time user answers a question
// [0] = jelly
// [1] = nautilus
// [2] = coral
// [3] = crab
// [4] = shark
// [5] = angel
// [6] = fish
// [7] = seal
// [8] = star
// [9] = hermit
// [10] = ray
// [11] = turtle
export const initialScores: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

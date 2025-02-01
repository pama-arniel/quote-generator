const localQuotes = [
  {
    q: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    a: "Thomas Edison",
  },
  {
    q: "You can observe a lot just by watching.",
    a: "Yogi Berra",
  },
  {
    q: "A house divided against itself cannot stand.",
    a: "Abraham Lincoln",
  },
  {
    q: "Difficulties increase the nearer we get to the goal.",
    a: "Johann Wolfgang von Goethe",
  },
  {
    q: "Fate is in your hands and no one elses",
    a: "Byron Pulsifer",
  },
  {
    q: "Be the chief but never the lord.",
    a: "Lao Tzu",
  },
  {
    q: "Nothing happens unless first we dream.",
    a: "Carl Sandburg",
  },
  {
    q: "Well begun is half done.",
    a: "Aristotle",
  },
  {
    q: "Life is a learning experience, only if you learn.",
    a: "Yogi Berra",
  },
  {
    q: "Self-complacency is fatal to progress.",
    a: "Margaret Sangster",
  },
  {
    q: "Peace comes from within. Do not seek it without.",
    a: "Buddha",
  },
  {
    q: "What you give is what you get.",
    a: "Byron Pulsifer",
  },
  {
    q: "We can only learn to love by loving.",
    a: "Iris Murdoch",
  },
  {
    q: "Life is change. Growth is optional. Choose wisely.",
    a: "Karen Clark",
  },
  {
    q: "You'll see it when you believe it.",
    a: "Wayne Dyer",
  },
  {
    q: "Today is the tomorrow we worried about yesterday.",
    a: null,
  },
  {
    q: "It's easier to see the mistakes on someone else's paper.",
    a: null,
  },
  {
    q: "Every man dies. Not every man really lives.",
    a: null,
  },
  {
    q: "To lead people walk behind them.",
    a: "Lao Tzu",
  },
  {
    q: "Having nothing, nothing can he lose.",
    a: "William Shakespeare",
  },
  {
    q: "Trouble is only opportunity in work clothes.",
    a: "Henry J. Kaiser",
  },
  {
    q: "A rolling stone gathers no moss.",
    a: "Publilius Syrus",
  },
  {
    q: "Ideas are the beginning points of all fortunes.",
    a: "Napoleon Hill",
  },
  {
    q: "Everything in life is luck.",
    a: "Donald Trump",
  },
  {
    q: "Doing nothing is better than being busy doing nothing.",
    a: "Lao Tzu",
  },
  {
    q: "Trust yourself. You know more than you think you do.",
    a: "Benjamin Spock",
  },
  {
    q: "Study the past, if you would divine the future.",
    a: "Confucius",
  },
  {
    q: "The day is already blessed, find peace within it.",
    a: null,
  },
  {
    q: "From error to error one discovers the entire truth.",
    a: "Sigmund Freud",
  },
  {
    q: "Well done is better than well said.",
    a: "Benjamin Franklin",
  },
  {
    q: "Bite off more than you can chew, then chew it.",
    a: "Ella Williams",
  },
  {
    q: "Work out your own salvation. Do not depend on others.",
    a: "Buddha",
  },
  {
    q: "One today is worth two tomorrows.",
    a: "Benjamin Franklin",
  },
  {
    q: "Once you choose hope, anythings possible.",
    a: "Christopher Reeve",
  },
  {
    q: "God always takes the simplest way.",
    a: "Albert Einstein",
  },
  {
    q: "One fails forward toward success.",
    a: "Charles Kettering",
  },
  {
    q: "From small beginnings come great things.",
    a: null,
  },
  {
    q: "Learning is a treasure that will follow its owner everywhere",
    a: "Chinese proverb",
  },
  {
    q: "Be as you wish to seem.",
    a: "Socrates",
  },
  {
    q: "The world is always in movement.",
    a: "V. Naipaul",
  },
  {
    q: "Never mistake activity for achievement.",
    a: "John Wooden",
  },
  {
    q: "What worries you masters you.",
    a: "Haddon Robinson",
  },
  {
    q: "One faces the future with ones past.",
    a: "Pearl Buck",
  },
  {
    q: "Goals are the fuel in the furnace of achievement.",
    a: "Brian Tracy",
  },
  {
    q: "Who sows virtue reaps honour.",
    a: "Leonardo da Vinci",
  },
  {
    q: "Be kind whenever possible. It is always possible.",
    a: "Dalai Lama",
  },
  {
    q: "Talk doesn't cook rice.",
    a: "Chinese proverb",
  },
  {
    q: "He is able who thinks he is able.",
    a: "Buddha",
  },
  {
    q: "A goal without a plan is just a wish.",
    a: "Larry Elder",
  },
  {
    q: "To succeed, we must first believe that we can.",
    a: "Michael Korda",
  },
  {
    q: "Learn from yesterday, live for today, hope for tomorrow.",
    a: "Albert Einstein",
  },
  {
    q: "A weed is no more than a flower in disguise.",
    a: "James Lowell",
  },
  {
    q: "Do, or do not. There is no try.",
    a: "Yoda",
  },
  {
    q: "All serious daring starts from within.",
    a: "Harriet Beecher Stowe",
  },
  {
    q: "The best teacher is experience learned from failures.",
    a: "Byron Pulsifer",
  },
  {
    q: "Think how hard physics would be if particles could think.",
    a: "Murray Gell-Mann",
  },
  {
    q: "Love is the flower you've got to let grow.",
    a: "John Lennon",
  },
  {
    q: "Don't wait. The time will never be just right.",
    a: "Napoleon Hill",
  },
  {
    q: "Time is the wisest counsellor of all.",
    a: "Pericles",
  },
  {
    q: "You give before you get.",
    a: "Napoleon Hill",
  },
  {
    q: "Wisdom begins in wonder.",
    a: "Socrates",
  },
  {
    q: "Without courage, wisdom bears no fruit.",
    a: "Baltasar Gracian",
  },
  {
    q: "Change in all things is sweet.",
    a: "Aristotle",
  },
  {
    q: "What you fear is that which requires action to overcome.",
    a: "Byron Pulsifer",
  },
  {
    q: "When performance exceeds ambition, the overlap is called success.",
    a: "Cullen Hightower",
  },
  {
    q: "When deeds speak, words are nothing.",
    a: "African proverb",
  },
  {
    q: "Real magic in relationships means an absence of judgement of others.",
    a: "Wayne Dyer",
  },
  {
    q: "I never think of the future. It comes soon enough.",
    a: "Albert Einstein",
  },
  {
    q: "Skill to do comes of doing.",
    a: "Ralph Emerson",
  },
  {
    q: "Wisdom is the supreme part of happiness.",
    a: "Sophocles",
  },
  {
    q: "I believe that every person is born with talent.",
    a: "Maya Angelou",
  },
  {
    q: "Important principles may, and must, be inflexible.",
    a: "Abraham Lincoln",
  },
  {
    q: "The undertaking of a new action brings new strength.",
    a: "Richard Evans",
  },
  {
    q: "The years teach much which the days never know.",
    a: "Ralph Emerson",
  },
  {
    q: "Our distrust is very expensive.",
    a: "Ralph Emerson",
  },
  {
    q: "All know the way; few actually walk it.",
    a: "Bodhidharma",
  },
  {
    q: "Great talent finds happiness in execution.",
    a: "Johann Wolfgang von Goethe",
  },
  {
    q: "Faith in oneself is the best and safest course.",
    a: "Michelangelo",
  },
  {
    q: "Courage is going from failure to failure without losing enthusiasm.",
    a: "Winston Churchill",
  },
  {
    q: "The two most powerful warriors are patience and time.",
    a: "Leo Tolstoy",
  },
  {
    q: "Anticipate the difficult by managing the easy.",
    a: "Lao Tzu",
  },
  {
    q: "Those who are free of resentful thoughts surely find peace.",
    a: "Buddha",
  },
  {
    q: "A short saying often contains much wisdom.",
    a: "Sophocles",
  },
  {
    q: "It takes both sunshine and rain to make a rainbow.",
    a: null,
  },
  {
    q: "A beautiful thing is never perfect.",
    a: null,
  },
  {
    q: "Only do what your heart tells you.",
    a: "Princess Diana",
  },
  {
    q: "Life is movement-we breathe, we eat, we walk, we move!",
    a: "John Pierrakos",
  },
  {
    q: "No one can make you feel inferior without your consent.",
    a: "Eleanor Roosevelt",
  },
  {
    q: "Argue for your limitations, and sure enough theyre yours.",
    a: "Richard Bach",
  },
  {
    q: "Luck is what happens when preparation meets opportunity.",
    a: "Seneca",
  },
  {
    q: "Victory belongs to the most persevering.",
    a: "Napoleon Bonaparte",
  },
  {
    q: "Love all, trust a few, do wrong to none.",
    a: "William Shakespeare",
  },
  {
    q: "In order to win, you must expect to win.",
    a: "Richard Bach",
  },
  {
    q: "A goal is a dream with a deadline.",
    a: "Napoleon Hill",
  },
  {
    q: "You can do it if you believe you can!",
    a: "Napoleon Hill",
  },
  {
    q: "Set your goals high, and don't stop till you get there.",
    a: "Bo Jackson",
  },
  {
    q: "Every new day is another chance to change your life.",
    a: null,
  },
  {
    q: "Smile, breathe, and go slowly.",
    a: "Thich Nhat Hanh",
  },
  {
    q: "Nobody will believe in you unless you believe in yourself.",
    a: "Liberace",
  },
  {
    q: "Do more than dream: work.",
    a: "William Arthur Ward",
  },
  {
    q: "No man was ever wise by chance.",
    a: "Seneca",
  },
  {
    q: "Some pursue happiness, others create it.",
    a: null,
  },
  {
    q: "He that is giddy thinks the world turns round.",
    a: "William Shakespeare",
  },
  {
    q: "Don't ruin the present with the ruined past.",
    a: "Ellen Gilchrist",
  },
  {
    q: "Do something wonderful, people may imitate it.",
    a: "Albert Schweitzer",
  },
  {
    q: "We do what we do because we believe.",
    a: null,
  },
  {
    q: "Do one thing every day that scares you.",
    a: "Eleanor Roosevelt",
  },
  {
    q: "If you cannot be silent be brilliant and thoughtful.",
    a: "Byron Pulsifer",
  },
  {
    q: "Who looks outside, dreams; who looks inside, awakes.",
    a: "Carl Jung",
  },
  {
    q: "What we think, we become.",
    a: "Buddha",
  },
  {
    q: "The shortest answer is doing.",
    a: "Lord Herbert",
  },
  {
    q: "All our knowledge has its origins in our perceptions.",
    a: "Leonardo da Vinci",
  },
  {
    q: "The harder you fall, the higher you bounce.",
    a: null,
  },
  {
    q: "Trusting our intuition often saves us from disaster.",
    a: "Anne Wilson Schaef",
  },
  {
    q: "Truth is powerful and it prevails.",
    a: "Sojourner Truth",
  },
  {
    q: "Light tomorrow with today!",
    a: "Elizabeth Browning",
  },
  {
    q: "Silence is a fence around wisdom.",
    a: "German proverb",
  },
  {
    q: "Society develops wit, but its contemplation alone forms genius.",
    a: "Madame de Stael",
  },
  {
    q: "The simplest things are often the truest.",
    a: "Richard Bach",
  },
  {
    q: "Everyone smiles in the same language.",
    a: null,
  },
  {
    q: "Yesterday I dared to struggle. Today I dare to win.",
    a: "Bernadette Devlin",
  },
  {
    q: "No alibi will save you from accepting the responsibility.",
    a: "Napoleon Hill",
  },
  {
    q: "If you can dream it, you can do it.",
    a: "Walt Disney",
  },
  {
    q: "It is better to travel well than to arrive.",
    a: "Buddha",
  },
  {
    q: "Life shrinks or expands in proportion to one's courage.",
    a: "Anais Nin",
  },
  {
    q: "You have to believe in yourself.",
    a: "Sun Tzu",
  },
  {
    q: "Our intention creates our reality.",
    a: "Wayne Dyer",
  },
  {
    q: "Silence is a true friend who never betrays.",
    a: "Confucius",
  },
  {
    q: "Character develops itself in the stream of life.",
    a: "Johann Wolfgang von Goethe",
  },
  {
    q: "From little acorns mighty oaks do grow.",
    a: "American proverb",
  },
  {
    q: "You can't stop the waves, but you can learn to surf.",
    a: "Jon Kabat-Zinn",
  },
  {
    q: "Reality does not conform to the ideal, but confirms it.",
    a: "Gustave Flaubert",
  },
  {
    q: "Speak low, if you speak love.",
    a: "William Shakespeare",
  },
  {
    q: "A really great talent finds its happiness in execution.",
    a: "Johann Wolfgang von Goethe",
  },
  {
    q: "Reality leaves a lot to the imagination.",
    a: "John Lennon",
  },
  {
    q: "The greatest remedy for anger is delay.",
    a: "Seneca",
  },
  {
    q: "Growth itself contains the germ of happiness.",
    a: "Pearl Buck",
  },
  {
    q: "You can do what's reasonable or you can decide what's possible.",
    a: null,
  },
];

export interface IntroChoice {
  id: string;
  label: string;
  /** Next question id. Omit when this choice leaves the intro. */
  next?: string;
  route?: string;
  fragment?: string;
}

export interface IntroQuestion {
  id: string;
  prompt: string;
  detail?: string;
  choices: IntroChoice[];
}

/** Full-screen questions. Edit prompts, choices, and destinations here. */
export const introQuestions: IntroQuestion[] = [
  {
    id: 'intent',
    prompt: 'What should we start with?',
    detail: 'One screen at a time.',
    choices: [
      { id: 'work', label: 'The work', next: 'work' },
      { id: 'story', label: 'The person', next: 'story' },
      { id: 'hello', label: 'A hello', next: 'hello' },
    ],
  },
  {
    id: 'work',
    prompt: 'Which work?',
    detail: 'Pick a shelf. You can wander after.',
    choices: [
      { id: 'pro', label: 'Product & client', route: '/portfolio/professional' },
      { id: 'personal', label: 'Personal projects', route: '/portfolio/personal' },
      { id: 'resume', label: 'The resume', route: '/resume' },
    ],
  },
  {
    id: 'story',
    prompt: 'How much of the story?',
    choices: [
      { id: 'short', label: 'The short version', route: '/' },
      { id: 'facts', label: 'A few odd facts', route: '/', fragment: 'facts' },
    ],
  },
  {
    id: 'hello',
    prompt: 'Want to send a note?',
    detail: 'Or keep looking around.',
    choices: [
      { id: 'form', label: 'Open the form', route: '/contact' },
      { id: 'browse', label: 'Look around first', route: '/' },
    ],
  },
];

export const introStartId = introQuestions[0].id;

export function introQuestion(id: string): IntroQuestion {
  return introQuestions.find((question) => question.id === id) ?? introQuestions[0];
}

export function shuffleArray(array: any[]): string[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function takeSome(images: string[], n: number) {
  return images.slice(0, n);
}

export function preventDefault(e: React.DragEvent<HTMLDivElement>): boolean {
  e.preventDefault();
  return false;
}

export function extractUuid(url: string): string | null {
  const uuidRegex =
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
  const match = url.match(uuidRegex);
  return match && match[0];
}

export function logGreeting() {
  console.log(
    `
    %c
 ▄████▄   ▄▄▄       ███▄ ▄███▓ ▄▄▄▄    ▄▄▄      
▒██▀ ▀█  ▒████▄    ▓██▒▀█▀ ██▒▓█████▄ ▒████▄    
▒▓█    ▄ ▒██  ▀█▄  ▓██    ▓██░▒██▒ ▄██▒██  ▀█▄  
▒▓▓▄ ▄██▒░██▄▄▄▄██ ▒██    ▒██ ▒██░█▀  ░██▄▄▄▄██ 
▒ ▓███▀ ░ ▓█   ▓██▒▒██▒   ░██▒░▓█  ▀█▓ ▓█   ▓██▒
░ ░▒ ▒  ░ ▒▒   ▓▒█░░ ▒░   ░  ░░▒▓███▀▒ ▒▒   ▓▒█░
  ░  ▒     ▒   ▒▒ ░░  ░      ░▒░▒   ░   ▒   ▒▒ ░
░          ░   ▒   ░      ░    ░    ░   ░   ▒   
░ ░            ░  ░       ░    ░            ░  ░
░                                   ░           

%cOhhh, looks like you know a lot about cars :O have fun hacking the game and ruining all the fun <3

`,
    "font-size: 24px; font-weight: bold; color: #0f0;",
    "",
  );
}

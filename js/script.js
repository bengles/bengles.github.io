const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
  console.log('theme set to', theme);
}

const hasCodeRun = localStorage.getItem('hasCodeRun');

if (!hasCodeRun) {
  const defaultTheme = "dark";
  setTheme(defaultTheme);
  localStorage.setItem('hasCodeRun', 'true');
}


const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  }
}

getTheme();
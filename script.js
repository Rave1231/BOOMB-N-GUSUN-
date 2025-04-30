async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert(error.message);
  window.location.href = 'dashboard.html';
}

async function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);
  window.location.href = 'dashboard.html';
}

async function saveProfile() {
  const user = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: user.data.user.id,
      display_name: document.getElementById('displayName').value,
      username: document.getElementById('username').value,
      steam: document.getElementById('steam').value,
      instagram: document.getElementById('instagram').value,
      discord: document.getElementById('discord').value,
    });
  if (error) return alert(error.message);
  alert('Kaydedildi');
}
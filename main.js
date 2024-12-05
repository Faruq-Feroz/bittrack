 // JavaScript to handle splash screen timeout
 setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
  }, 3000); // 3000ms = 3 seconds

  // Button functionalities (Example)
  document.getElementById('send-btn').addEventListener('click', () => {
    alert('Send Sats functionality coming soon!');
  });

  document.getElementById('receive-btn').addEventListener('click', () => {
    alert('Receive Sats functionality coming soon!');
  });

  document.getElementById('add-expense-btn').addEventListener('click', () => {
    alert('Redirecting to Add Expense Page...');
    // Future: Redirect to an expense logging form
  });
  
  document.getElementById('view-reports-btn').addEventListener('click', () => {
    alert('Redirecting to Reports Page...');
    // Future: Redirect to expense reports or analysis
  });
  
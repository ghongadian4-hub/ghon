// Data Structures
let personArray = []; // Stores all users
let actionStack = []; // Tracks actions (Last In, First Out)

function registerPerson() {
    // Get values
    const FName = document.getElementById('fName').value;
    const MName = document.getElementById('mName').value;
    const LName = document.getElementById('lName').value;
    const Age = document.getElementById('age').value;
    const gmail = document.getElementById('gmail').value;

    // 1. Conditional Statement: Validation
    if (fName === "" || lName === "" || age === "" || !gmail.includes("@")) {
        alert("Please fill in all fields correctly!");
        return;
    }

    // 2. Object Creation
    const person = {
        fullName:'$(fName) $(mName) $(lName)',
        age:age,
        email: gmail
    };

    // 3. Array & Stack Usage
    personArray.push(person);
    actionStack.push('Added: $(fName)');

    console.log("Current Stack:", actionStack);
    
    clearInputs();
    renderDashboard();
}

function renderDashboard() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; // Clear current display

    // 4. Loop Structure: Iterating through the array
    for (let i = 0; i < personArray.length; i++) {
        let row = `<tr>
            <td>${personArray[i].fullName}</td>
            <td>${personArray[i].age}</td>
            <td>${personArray[i].email}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}

function clearInputs() {
    document.getElementById('fName').value = "";
    document.getElementById('mName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('age').value = "";
    document.getElementById('gmail').value = "";
}

// Navigation Function
function showPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(p => p.style.display = 'none');
    document.getElementById(panelId).style.display = 'block';
}

function exitSystem() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
        // Fallback for browsers that block window.close
        document.body.innerHTML = "<h1>Logged Out</h1><p>Please close this tab.</p>";
    }
}


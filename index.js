let url = "https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
var data_x;
let new_data = [];
let table = document.getElementById("employe_table");
let details = document.getElementById("individual_info");
var load = document.getElementById("loading");








/*function greetings(c) {
    console.log(time)
    if (6 <= time <= 12) {
        return "Good Morning " + c
    } else if (12 <= time <= 18) {
        return "Good afternoon " + c
    } else {
        return "Good Evening " + c
    }

}*/

var myDate = new Date();
var hrs = myDate.getHours();



function greetings(C) {
    if (hrs < 12)
        return 'Good Morning' + '' + C;
    else if (hrs >= 12 && hrs <= 17)
        return 'Good Afternoon' + ' ' + C;
    else if (hrs >= 17 && hrs <= 24)
        return 'Good Evening' + ' ' + C;

}

// display right side data 
function display_employe_data(b, j) {
    let id = b[j]['id'];
    let uid = b[j]['uid']
    let dob = b[j]['date_of_birth']
    let employment_title = b[j]['employment']['title'];
    let employment_key_skill = b[j]['employment']['key_skill'];
    let email = b[j]['email'];
    let city = b[j]['address']['city'];
    let state = b[j]['address']['state'];
    let country = b[j]['address']['country'];
    let street_address = b[j]['address']['street_address'];
    let street_name = b[j]['address']['street_name'];
    let credit_card = b[j]['credit_card']['cc_number'];
    let zip_code = b[j]['address']['zip_code'];
    let phone_no = b[j]['phone_number'];
    let payment_method = b[j]['subscription']['payment_method'];
    let plan = b[j]['subscription']['plan'];
    let status = b[j]['subscription']['status'];
    let term = b[j]['subscription']['term'];
    let first_name = b[j]['first_name'];
    let last_name = b[j]['last_name'];
    let gender = b[j]['gender'];
    let greet = greetings(first_name);
    let detail_text = `
    <p>
    <b>${greet}</b><br>
    <b>ID</b>: ${id}<br>  <b>UID</b>: ${uid}<br>
    <b>Employement</b>:<br>
    <ul>
    <li><b>Title</b>: ${employment_title}</li>
    <li><b>Key Skill</b>: ${employment_key_skill}</li>
    </ul><br>
    <b>Address</b>: ${street_name}, ${street_address}, ${city}, ${state}, ${country}<br>
    <b>Credit card number</b>: ${credit_card}<br>
    <b>Subscription</b>:<br>
    <ul>
    <li><b>Plan</b>: ${plan}</li>
    <li><b>Status</b>: ${status}</li>
    <li><b>Payment Method</b>: ${payment_method}</li>
    <li><b>Term</b>: ${term}</li>
    </ul><br>
    </p>
    `
    details.innerHTML = detail_text

}

// onClick function for right side data
function demo_data(j) {
    display_employe_data(this.data_x, j)
}

// display function after deleting data
function display_employe_new_list(c) {
    let text = `<tr>
    <th class="sr_no">Sr. No.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Employment Title</th>
    <th>Country</th>
    <th>Action</th>
    </tr>`;
    let len = c.length;
    for (let k = 0; k < len; k++) {
        let first_name = c[k]['first_name'];
        let last_name = c[k]['last_name'];
        let username = c[k]['username'];
        let employment = c[k]['employment']['title'];
        let country = c[k]['address']['country'];
        text += `
        <tr>
        <td class="sr_no">${k + 1}</td>
        <td class="table_rows">${first_name}</td>
        <td class="table_rows">${last_name}</td>
        <td class="table_rows">${username}</td>
        <td class="table_rows">${employment}</td>
        <td class="table_rows">${country}</td>
        <td class = "table_rows_action">
        <button type="button" onClick="demo_data(${k})"><<i class="fa-solid fa-user"></i></button>
        <button type="button" onClick="delete_data(${k})"><i class="fa-solid fa-trash-can"></i></button>
        
        </td>
        </tr>`;

    }
    table.innerHTML = text;
    display_employe_data(c, 0)
}

// OnClick function to delete data
function delete_data(j) {
    let count = 0;
    if (count > 0) {
        delete new_data[j];
    } else {
        delete this.data_x[j];
    }
    new_data.length = 0;
    for (let x of this.data_x) {
        if (x != undefined) {
            count += 1
            new_data.push(x)
        }
    }
    console.log(count)
    display_employe_new_list(new_data)

}

// display left side data finction
function display_employe_list(a) {
    let text = `<tr>
    <th class="sr_no">Sr. No.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Employment Title</th>
    <th>Country</th>
    <th>Action</th>
    </tr>`;
    let len = a.length;
    for (let i = 0; i < len; i++) {
        let first_name = a[i]['first_name'];
        let last_name = a[i]['last_name'];
        let username = a[i]['username'];
        let employment = a[i]['employment']['title'];
        let country = a[i]['address']['country'];
        text += `
        <tr>
        <td class="sr_no">${i + 1}</td>
        <td class="table_rows">${first_name}</td>
        <td class="table_rows">${last_name}</td>
        <td class="table_rows">${username}</td>
        <td class="table_rows">${employment}</td>
        <td class="table_rows">${country}</td>
        <td class = "table_rows_action">
        <button type="button" onClick="demo_data(${i})"><i class="fa-solid fa-user"></i></button>
        <button type="button" onClick="delete_data(${i})"><i class="fa-solid fa-trash-can"></i></button>
    
        </td>
        </tr>`;
        // table.insertAdjacentHTML('beforeend', `${text}`);
    }
    table.insertAdjacentHTML('beforeend', `${text}`);
    display_employe_data(a, 0)
}


fetch(url).then(function(resp) {
    return resp.json()

}).then(function(data) {
    this.data_x = data
    display_employe_list(data_x)
})
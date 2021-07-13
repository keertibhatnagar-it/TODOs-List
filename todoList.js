
        function getAnUpdate() {
            console.log("Updating...");
            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            if (localStorage.getItem('itemsJson') == null) {
                itemsJsonArray = [];
                itemsJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            }
            else {
                itemsJsonArrayStr = localStorage.getItem('itemsJson');
                itemsJsonArray = JSON.parse(itemsJsonArrayStr);
                itemsJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            }
            update();
        }

        function update() {
            console.log("Updating...");
            tit = document.getElementById('title').value;
            desc = document.getElementById('description').value;
            if (localStorage.getItem('itemsJson') == null) {
                itemsJsonArray = [];
                itemsJsonArray.push([tit, desc]);
                localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            }
            else {
                itemsJsonArrayStr = localStorage.getItem('itemsJson');
                itemsJsonArray = JSON.parse(itemsJsonArrayStr);
            }

            //Populate the table
            let tableBody = document.getElementById("tableBody");
            let str = " ";
            itemsJsonArray.forEach((element, index) => {
                str += `
                        <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
                        </tr>`
            });
            tableBody.innerHTML = str;
        }
        add = document.getElementById("add");
        add.addEventListener("click", getAnUpdate);
        update();

        function deleted(itemIndex) {
            console.log("Deleted", itemIndex);
            itemsJsonArrayStr = localStorage.getItem('itemsJson');
            itemsJsonArray = JSON.parse(itemsJsonArrayStr);
            //deleting itemIndex element from the array
            itemsJsonArray.splice(itemIndex, 1);
            localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
            //updating list
            update();
        }

        function clearStorage() {
            if (confirm("Do you really want to clear?")) {
                localStorage.clear();
                console.log("Clearing the local Storage...");
                update();
            }
        }
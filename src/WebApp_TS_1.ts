type objectValue = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };

fetch("https://jsonplaceholder.typicode.com/users")
    .then((onComingData)=>{
        // console.log(onComingData);
        return onComingData.json(); // oncoming data converted from JSON format to Object
    })
    .then((dataObject)=>{
        // console.log(dataObject);
        let tableData="";
        dataObject.map((values: objectValue)=>{
            tableData+=`<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.username}</td>
            <td>${values.email}</td>
            <td>${values.phone}</td>
            <td>${values.website}</td>
        </tr>`;
        });
        document.getElementById("table_body")!.innerHTML=tableData;
    });
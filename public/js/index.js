class SendRequest {
  constructor() {}

  async sendInsertRequest(json) {
    const response = await fetch("url", {
      method: "POST",
      body: json,
      headers: { "Content-Type": "application/json" },
    });

    const myJson = await response.json();
    return myJson;
  }

  async sendQueryRequest(json) {
    const response = await fetch("url", {
      method: "GET",
      body: json,
      headers: { "Content-Type": "application/json" },
    });

    const myJson = await response.json();
    return myJson;
  }
}

class FormatIndex {
  constructor() {
    this.insertButton = document.getElementById("insertButton");
    this.queryButton = document.getElementById("queryButton");

    this.insertResults = document.getElementById("insert_response");
    this.queryResults = document.getElementById("query_response");

    this.request = new SendRequest();
  }

  async insertForm() {
    const jsonBody = {
      "Sara Brown": "1901-01-01",
      "John Smith": "1941-01-01",
      "Jack Ma": "1961-01-30",
      "Elon Musk": "1999-01-01",
    };

    this.insertButton.addEventListener("click", async () => {
      const response = await this.request.sendInsertRequest(
        JSON.parse(jsonBody)
      );
      if (response) {
        this.insertResults.innerHTML = JSON.stringify(response);
      } else {
        this.insertResults.innerHTML = "Something went wrong!";
      }
    });
  }

  async requestForm() {
    const queryTextArea = document.getElementById("query_text_area");
    const queryString = queryTextArea.value;

    const jsonBody = {
      query: queryString,
    };

    this.queryButton.addEventListener("click", async () => {
      const response = await this.request.sendInsertRequest(
        JSON.parse(jsonBody)
      );
      if (response) {
        this.queryResults.innerHTML = JSON.stringify(response);
      } else {
        this.queryResults.innerHTML = "Something went wrong!";
      }
    });
  }
}

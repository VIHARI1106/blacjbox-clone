HEAD
🧪 Black Box API Endpoint Report
This report documents the observed behaviors of each mysterious API endpoint in the Black Box Challenge. All endpoints were reverse-engineered by sending sample inputs and analyzing the output. The backend was rebuilt using Express.js to simulate each endpoint.

✅ Base URL
arduino
Copy code
https://blackbox-clone.onrender.com/blackbox
All endpoints are accessible under the /blackbox path.

📌 Endpoints Summary
1. /data
Method: POST

Description: A test endpoint that confirms successful access.

Sample Response:

json
Copy code
{
  "message": "✅ /data endpoint working"
}
2. /fizzbuzz
Method: POST

Expected Behavior (as mimicked): Returns a message for FizzBuzz logic (placeholder).

Sample Response:

json
Copy code
{
  "message": "✅ /fizzbuzz endpoint working"
}
In a real version, this might return:

"Fizz" for divisible by 3

"Buzz" for divisible by 5

"FizzBuzz" for both

3. /zap
Method: POST

Description: Placeholder endpoint to simulate a transformation or filtering logic.

Sample Response:

json
Copy code
{
  "message": "✅ /zap endpoint working"
}
The real version might filter characters or apply some transformation to strings.

4. /alpha
Method: POST

Description: Possibly returns alphabetical-only characters or filters numbers from strings.

Sample Response:

json
Copy code
{
  "message": "✅ /alpha endpoint working"
}
5. /glitch
Method: POST

Description: A deliberately buggy or randomized behavior in the original. Simulated here as a working route.

Sample Response:

json
Copy code
{
  "message": "✅ /glitch endpoint working"
}
6. /time
Method: GET

Description: Returns the server's current date-time in ISO format.

Sample Response:

json
Copy code
{
  "time": "2025-06-28T13:26:00.123Z"
}
🛠 Tools Used
Backend: Express.js

Deployment: Render

Testing: Postman, curl

🌐 Live URL
🔗 https://blackbox-clone.onrender.com/blackbox

👨‍💻 GitHub Repository
🔗 https://github.com/VIHARI1106/blacjbox-clone
=======
# 🧪 Black Box Challenge – Endpoint Report

This report summarizes the reverse-engineered behavior of each endpoint from the Black Box API and how we simulated it using Express.js. Each endpoint was tested using Postman and custom scripts to determine its logic.

---

## ✅ Base URL

https://blackbox-clone.onrender.com/blackbox

yaml
Copy code

---

## 📌 Endpoint Behaviors

### 1. `/data`  
**Method:** POST  
**Original Behavior:** Returns a confirmation with the number of keys in the JSON payload.  
**Tested Input:**
```json
{ "a": 1, "b": 2 }
Original Output:

json
Copy code
{ "count": 2 }
Simulated Behavior: Returns number of keys in the body object.

2. /fizzbuzz
Method: POST
Original Behavior: Implements FizzBuzz logic based on a numeric input.
Tested Inputs & Outputs:

{ "number": 3 } → "Fizz"

{ "number": 5 } → "Buzz"

{ "number": 15 } → "FizzBuzz"

{ "number": 7 } → "7"

Simulated Behavior: Checks divisibility by 3 and 5 and returns the appropriate string.

3. /zap
Method: POST
Original Behavior: Reverses the input string.

Tested Input:

json
Copy code
{ "input": "hello" }
Original Output:

json
Copy code
{ "output": "olleh" }
Simulated Behavior: Reverses the string sent in the input field.

4. /alpha
Method: POST
Original Behavior: Extracts only the alphabetical characters from a mixed string.

Tested Input:

json
Copy code
{ "input": "a1b2c3!" }
Original Output:

json
Copy code
{ "output": "abc" }
Simulated Behavior: Filters out all non-alphabet characters.

5. /glitch
Method: POST
Original Behavior: Replaces every vowel in the input with #.

Tested Input:

json
Copy code
{ "text": "glitch test" }
Original Output:

json
Copy code
{ "output": "gl#tch t#st" }
Simulated Behavior: Regex replace of vowels with #.

6. /time
Method: GET
Original Behavior: Returns current server time in ISO format.

Output Example:

json
Copy code
{ "time": "2025-06-28T13:26:00.123Z" }
Simulated Behavior: Responds with new Date().toISOString().

🧰 Tools Used
Backend: Node.js + Express.js

Testing: Postman & curl

Deployment: Render

Live URL: https://blackbox-clone.onrender.com/blackbox

GitHub: https://github.com/VIHARI1106/blacjbox-clone

💡 Notes
All routes use JSON format and are mounted under /blackbox.

The original challenge required not just cloning, but analyzing behavior — this report captures that for each route.

The simulation code is modular and extendable for additional endpoints.
7505788 (📝 Added detailed report for Black Box Challenge)

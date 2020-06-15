package main 

import(
	"io/ioutil"
	"fmt"
	"strings"
	"sort"
	"encoding/json"
)

// Just a little helper script I used to sort the word files alphabetically and marshal them to json
func main(){

	dat, err := ioutil.ReadFile("15letters.txt")
    if err != nil {
		fmt.Println(err)
	}
	
	wordString := string(dat)
	wordSlice := strings.Split(wordString, " ")
	sort.Strings(wordSlice)

	json, err := json.Marshal(wordSlice)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(json))
}
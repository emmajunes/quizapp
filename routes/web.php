<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/questions', function () {    

    $questions =[];
    $getJson = file_get_contents(storage_path("questions.json"));
    $jsonQuestions = json_decode($getJson, true);
    $countCategories = ["Film & TV" => [],"Geografi" => [],"Historia" => [], "Musik" => [],"Övrigt" =>[],"Vetenskap" =>[], "Sport" =>[]];
    

    while(count($questions) < 35){

        $randomNumber = rand(0, count($jsonQuestions) - 1);
        $randomQuestion = $jsonQuestions[$randomNumber];
        $category = $jsonQuestions[$randomNumber]["category"];
        
        //kolla efter dubbletter
        if(in_array($randomQuestion, $questions)){
            continue;
        }
       

        if($category === 'Film & TV' && count($countCategories['Film & TV']) < 5 ){
            array_push($countCategories["Film & TV"], 1);
        }
        elseif($category === 'Film & TV' && count($countCategories['Film & TV']) === 5 ){
            continue;
        }
        if($category === 'Geografi' && count($countCategories['Geografi']) < 5 ){
            array_push($countCategories["Geografi"], 1);
            
        }
        elseif($category === 'Geografi' && count($countCategories['Geografi']) === 5 ){
            continue;
        }
        if($category === 'Historia' && count($countCategories['Historia']) < 5 ){
            array_push($countCategories["Historia"], 1);
           
        }
        elseif($category === 'Historia' && count($countCategories['Historia']) === 5 ){
            continue;
        }
        if($category === 'Musik' && count($countCategories['Musik']) < 5 ){
            array_push($countCategories["Musik"], 1);
            
        }
        elseif($category === 'Musik' && count($countCategories['Musik']) === 5 ){
            continue;
        }
        if($category === 'Övrigt' && count($countCategories['Övrigt']) < 5 ){
            array_push($countCategories["Övrigt"], 1);
            
        }
        elseif($category === 'Övrigt' && count($countCategories['Övrigt']) === 5 ){
            continue;
        }
        if($category === 'Vetenskap' && count($countCategories['Vetenskap']) < 5 ){
            array_push($countCategories["Vetenskap"], 1);
            
        }
        elseif($category === 'Vetenskap' && count($countCategories['Vetenskap']) === 5 ){
            continue;
        }
        if($category === 'Sport' && count($countCategories['Sport']) < 5 ){
            array_push($countCategories["Sport"], 1);
        }
        elseif($category === 'Sport' && count($countCategories['Sport']) === 5 ){
            continue;
        }

        
        array_push($questions,$randomQuestion);
        
    }
    
    return response() -> json($questions); 

//---metod som tar ut 5 längsta frågorna---

// $questionlib = json_decode(file_get_contents(storage_path('/') . 'questions.json'), true);
// $questions = array();
// $longest = array();
// $qlengths = array();
// $alengths = array();
// foreach ($questionlib as $q) {
//     $qlengths[] = mb_strlen($q['question'], 'UTF-8');
//     $alengths[] = mb_strlen($q['answer'], 'UTF-8');
// }
// arsort($qlengths, SORT_NUMERIC);
// arsort($alengths, SORT_NUMERIC);
// $longest = array_slice($qlengths, 0, 5, true)  + array_slice($alengths, 0, 5, true);
// foreach ($longest as $key => $value) {
//     $questions[] = $questionlib[$key];
// }


// return response()->json($questions);
    
});

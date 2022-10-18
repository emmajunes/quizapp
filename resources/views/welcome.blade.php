<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>Donkeyquiz - boilerplate</title>
</head>

<body class="font-Poppins bg-white">

    <!-- donkey logo -->
    <div class="absolute p-8 tablet:pl-20 tablet:flex tablet:flex-col tablet:items-center">
        <img id="logo" class="w-24" src="/images/Logo.svg">
        <h2 id="logoText" class="text-darkblue font-semibold tablet:text-24">donkeyquiz</h2>
    </div>

    <!-- left blob -->
    <div class="flex justify-start">
        <img id="leftBlob"
            class="w-16 tablet:w-28 absolute top-[70%] tablet:top-[70%] tablet:mt-0 xl:top-[45%] xl:w-36 2xl:w-40"
            src="/images/LeftBlob.svg">
    </div>

    <!-- right blob -->
    <div class="flex justify-end">
        <img id="rightBlob" class="w-16 absolute tablet:mt-20 tablet:w-32 xl:w-48 2xl:w-52" src="/images/RightBlob.svg">
    </div>

    <!-- ev flytta progressbar hit?-->
    <div id="progressbar" class="hidden absolute bottom-12 w-full">
    <div class="flex items-center flex-col text-center">
        <div id="progressbarLine" class="relative w-56 h-[2px] bg-lightblue tablet:w-[420px] xl:w-[620px]">
            <div id="progressbarCounter" class="absolute h-3 w-[0%] center-y bg-darkblue rounded-full progressbar-transition"></div>
        </div>
        <p id="questionNumber" class="text-darkblue text-14 mt-4 tablet:text-16">Fråga 2 av 35</p>
    </div>
    </div>


    <!-- start page -->
    <div id="startPage" class="container h-screen transition-scale duration-300 scale-100">
        <div id="content" class="flex items-center flex-col text-center justify-center h-full">
            <h1 id="startHeader" class="text-darkblue text-32 font-semibold tablet:text-48">Svensk mästare i TP?
            </h1>
            <p id="info" class="text-darkblue text-12 mt-8 mb-10 tablet:text-20">Utmana vänner, kollegor och
                familj på frågesport. <br>Svara på 35 samtida frågor i 7 olika kategorier.</p>
            <button id="startButton"
                class="text-lightblue text-16 font-semibold px-8 py-3.5 border-lightblue border-2 rounded-full hover:bg-lightblue hover:text-white"
                type="button">Klicka här för att starta</button>
        </div>
    </div>

    <!-- questionPage -->
    <div id="questionPage" class="hidden transition-scale duration-300 scale-0">
        <div class="container h-screen">
            <div class="flex items-center flex-col text-center justify-center h-full">
                <p id="category" id="categoryHeader" class="text-lightblue text-14 mb-8 font-semibold">Film & TV</p>
                <h1 id="question"
                    class="text-darkblue text-18 mb-8 font-semibold w-[300px] tablet:text-32 tablet:w-[500px] xl:w-[656px] xl:text-48  xl:leading-[52px] ">
                    I vilken amerikansk delstat utspelar sig den populära Netflixserien Stranger Things?</h1>
                <button
                    id="answerButton"class="text-lightblue text-14 font-semibold px-6 py-2.5 tablet:text-16 tablet:px-8 tablet:py-3.5 mb-12 border-lightblue border-2 rounded-full hover:bg-lightblue hover:text-white tablet:mb-36"
                    type="button">Se svaret</button>
                
            </div>
        </div>
    </div>

    <!-- answerPage -->
    <div id="answerPage" class="hidden transition-scale duration-300 scale-0">
        <div class="container h-screen">
            <div id="textAnswer" class="flex items-center flex-col text-center justify-center h-full">
                <p class="text-white text-14 mb-8 font-semibold mt-8 tablet:mt-48">Rätt svar:</p>
                <h1 id="answer"
                    class="text-green text-24 mb-8 font-semibold w-[300px] tablet:w-[620px] tablet:text-48">Indiana</h1>
                <p class="text-white text-14 mb-8 font-semibold">Svarade du rätt?</p>
                <div class="flex flex-row space-x-4">
                    <button id="yesButton"
                        class="text-white text-16 font-semibold px-8 py-3.5 mb-12 border-white border-2 rounded-full hover:bg-white hover:text-lightblue tablet:mb-40"
                        type="button">Ja</button>
                    <button id="noButton"
                        class="text-white text-16 font-semibold px-8 py-3.5 mb-12 border-white border-2 rounded-full hover:bg-white hover:text-lightblue tablet:mb-40"
                        type="button">Nej</button>
                </div>
                {{-- <div class="">
                    <div class="relative w-56 h-[2px] bg-white tablet:w-[420px] xl:w-[620px]">
                        <div id="progressbar2" class="absolute h-3 w-[0%] center-y bg-white rounded-full progressbar-transition"></div>
                    </div>
                    <p id="questionCounter2" class="text-white text-14 mt-4 tablet:text-16">Fråga 2 av 35</p>
                </div> --}}
            </div>
        </div>
    </div>

    <!-- resultPage-->
    <div id="resultPage" class="hidden transition-scale duration-300 scale-0">
        <div class="container h-screen">
            <div class="flex items-center flex-col text-center justify-center h-full">
                <p class="text-darkblue text-12 font-semibold mb-4 mt-16 tablet:text-14 xl:mt-0">Ditt resultat</p>
                <h1 id="result" class="text-darkblue text-18 mb-4 font-semibold tablet:text-48 tablet:mt-6 xl:mb-12">
                    21 av 35 rätt
                </h1>
                <div class="xl:flex xl:flex-row">
                    <p class="text-darkblue text-12 font-semibold mb-1 tablet:text-14 xl:mb-0 xl:hidden">Film & TV</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Film & TV</p>
                        <div id="filmIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Geografi</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Geografi</p>
                        <div id="geografiIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Historia</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Historia</p>
                        <div id="historiaIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Musik</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Musik</p>
                        <div id="musikIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Övrigt</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Övrigt</p>
                        <div id="övrigtIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Vetenskap</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Vetenskap</p>
                        <div id="vetenskapIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                    <p class="text-darkblue mt-4 text-12 font-semibold mb-1 tablet:text-14 xl:hidden">Sport</p>
                    <div class="flex flex-row xl:flex-col-reverse xl:items-center xl:ml-11">
                        <p class="mobile:hidden text-darkblue text-12 font-semibold tablet:text-14 xl:block xl:mt-4">
                            Sport</p>
                        <div id="sportIndicator" class="flex flex-row items-center xl:flex-col-reverse">
                            <div class="bg-grey indicator-mobile tablet:indicator-desktop xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0 xl:mt-2"></div>
                            <div class="bg-grey ml-2 indicator-mobile tablet:indicator-desktop xl:ml-0"></div>
                        </div>
                    </div>
                </div>
                <button id="playAgainButton"
                    class="text-lightblue text-14 font-semibold px-6 py-2.5 mt-6 border-lightblue border-2 rounded-full hover:bg-lightblue hover:text-white tablet:text-16 tablet:px-8 tablet:py-3.5 tablet:mt-10"
                    type="button">En runda till</button>
            </div>
        </div>
        <script type="module" crossorigin src="http://localhost:3000/@@vite/client"></script>
        <script type="module" crossorigin src="http://localhost:3000/resources/js/app.js"></script>
    </div>
</body>

</html>

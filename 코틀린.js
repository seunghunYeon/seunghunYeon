  https://www.youtube.com/watch?v=SEPgoMZut6s&list=PLzkhjlqMgxvBil2PsIy23LGJ4NVZmDlRX
  이 동영상 참고한 내용입니다.


  -- 필수세팅
	1. file>setting -> editor > general > Auto Import  -> java, kotlin 에 auto import 모두 체크
	2. build.gradle(Module...) > plugins에  id 'kotlin-android-extensions' 구문추가. (현재 최신 버전에서는 kotlin-parcelize라고 기술해야한다.)
	
  -- 프로젝트 복사 / 새로열기 / 프로젝트 이름 바꾸기
    https://www.youtube.com/watch?v=GH29nCukxd8&list=PLzkhjlqMgxvBil2PsIy23LGJ4NVZmDlRX
	위 동영상 약 7분부터 확인해보기.
	
	=> 프록젝트 새로 열때 gradle project로 빌드한거냐고 물어보면  Trust 선택해서 빌드.
	   빌드시 gradle 버전이 안맞으면 업데이트나 다운로드 할거냐고 물어볼때 꼭해줘야한다.
	   안하면 프로젝트로 열리지 않고, 그냥 탐색기에서 보는거 처럼 파일들만 볼수있게된다.
	
  -- 출력    
	- 런타임 오류 확인
	  실행중 오류 확인 로그는 안드로이드 스튜디오 하단에 Logcat에 나타난다.
	- println("안녕")
	- 앱하단에 풍선만처럼 메시지 출력 : Toast함수 사용.
	  Toast.makeText(applicationContext, "안녕" , Toast.LENGTH_LONG).show()
	- $
	  $를 이용하면 변수값을 그냥 출력가능 (ex: "제이름은 $name 입니다.")
	  ${}를 이용하면 수식사용가능 (ex: "제 나이는 ${n1 + 1} 입니다.")
	
  -- 변수
    - var (variable) : 일반변수
	- val (value)    : 상수(선언후 값변경 불가.)
	- 코틀린은 반드시 초기값또는 자료형을 지정해야한다.(자료형을 명시하지 않으면 초기값을 기준으로 자동으로 자료형을 추론해서 만든다. 둘중하나는 지정해야한다)
		var 변수명:<자료형> = <초기값>   
		ex :
			var sValue:String   
			또는  
			var sValue = "xxx"
		
  -- ? 기호 사용 (래핑과 언래핑)		
	- 코틀린은 기본적으로 변수에 null을 허용하지 않는다. 만약 null을 허용하게 하고싶으면 ? 를 붙인다.(이걸 래핑이라한다.)
	  ex: var 변수명:<자료형>? = null
	  다시 null을 불가하게 하고싶으면 !! 를 붙인다.(이걸 언래핑이라고한다.)
	  ex: 변수명!!
	  위에 선언시 ?와 상관없이 if문 값이 null이 아닐때만 다음함수를 실행할수 있는데 이때도 ?를 사용한다.
	  ex: var sStr:String? = null			  //변수에 null허용가능하도록 변수선언
	      
	      var iLen:Int? = sStr?.length        
		  //?.   여기서 쓰인(sStr뒤에 두번째) ?는 isNull체크와 같다. null이면 length를 실행 안함. 결과적은로 iLen에는 null이 들어감.
		  
		  var iLen2:Int = sStr?.length ?: 0   
		  //?:    여기서 쓰인 ?: 는 isNull체크 후 null이면 ?: 다음 값을 반환한다.  ?:를 엘비스 연산자라고 한다.
		  
		  sStr?.run { println(" 안녕 난 null이야~ ^.- ") }
		  //?.run {...}   isNull체크 이후 특정구문을 실행하고 싶으면 ?.run을 쓰고 {}안에다 내용을 기술하면 된다.
		  
		  
  -- 형변환
    - var sStr:String = "12"
	  var iInt:Int    = sStr.toInt()
	  var iFlt: Float = sStr2.toFloat()
	  
	- 타입확인 및 변환 
		// Any 자료형과 is, as, as?
		val input1:Any = "안녕"	//Any자료형은 String도 될수 있고 Int가 될수도 있다.
		val input2:Any = 10
		if (input1 is String) {	//is로 변수의 자료형 검사
			val output:String = input1 as String	//as로 형변환
			println("  input1은 문자열입니다.")
		}
		if (input2 is Int) {    //is로 변수의 자료형 검사
			val output:Int = input2 as Int
			println("  input2는 숫자입니다.")
		}

		//바로위에 if문을 아래와 같이 한줄로 요약 가능하다.
		val output2:Int? = input1 as? Int	//output2:Int?는 null허용 변수 output2를 선연, input1 as? Int : input1이 int가 아니면 int로 변환하라는 수식.
		println("  input2는 숫자인가요? -> ${output2}")
		
	- 상수 (자바에서 static final같은 개념) -> 코틀린에서는 동반객체라고 부른다. 
		//클래스 밑에 선언하면 됨.(당영히 함수 안에도 선언 못함)
		class MainActivity : AppCompatActivity() {
			companion object {  //companion object(동반객) : 자바의 static 같다고 생각하면 됨.
				const val BONUS = 100	//const(상수화) : 자바의 final같다고 생각하면 됨.
			}
		
		
		// 동반 객체 안에 정의한 상수 접근
		val result2 = first + second + (패키지.)클래스명.BONUS
		println("  더하기 결과 2 : ${result2}")
		 
	- 패키지변수
		//패키지변수(자바에서는 반드시 클래스 블럭안에 변수를 선언해야하지만 코틀린은 클래스 블럭 밖에서도 변수선언이 가능)
		package org.techtown.basic4.constants
		var mUserName:String? = null
		val mBonus:Int = 1000

		// 패키지 변수 접근 (다른패키지에 클래스에서)
		패키지.클래스명.mUserName = "홍길동"
		val result3 = first + second + 패키지.클래스명.mBonus
		println("  ${패키지.클래스명.mUserName}의 더하기 결과 3 : ${result2}")
		
  -- 함수 (동영상 2_3_1~)
	- 선언방법
		//1. 함수 기본 선언
		fun add(a:Int, b:Int):Int {	// fun 함수명(파라미터:변수타입, ...):리턴타입 { }
			return a + b
		}

		//2. 함수 축약 (중괄호와 return 키워드 생략)  
		fun add2(a:Int, b:Int):Int = a + b

		//3. 함수 축약 (반환 자료형 생략)
		fun add3(a:Int, b:Int) = a + b
		
		//4. 함수 파라미터의 기본값 지정(호출시 생략되면 기본값으로 동작함)
		fun add4(a:Int, b:Int=0):Int {
			return a + b
		}
		
		//5. 파라미터를 동적으로 여러개 받기 : vararg로 변수를 선언하면 호출시 파라미터를 몇개를 넘기든 다 받아준다.
		// 호출 : val result = add5(10, 20, 30, 40, 50.....)
		fun add5(vararg inputs:Int):Int {
			var output = 0

			for (num in inputs) {
				output += num
			}
			return output
		}
		
	- 람다식 (함수에 이름 없이 선언(익명함수), 코드를 최소한으로 간단하게 선언하는 방식이다. , 변수에 함수를 활당하는 방식이다.)
		ex)   val val1 = {x:Int,y:Int -> x+y}   	   //변수 = {파라미터:자료형,.. -> 함수내용기술}
		ex)   val val2:(Int,Int->Int) = {x,y -> x+y}   //변수(파라미터자료형,.. -> 리전값자료형) = {파라미터,.. -> 함수내용기술} 
		ex)   val show1 = { println("한줄 출력") }  				// 파라미터와 반환값이 없는 경우 
        ex)   val show2: ()-> Unit = { println("한줄 출력") }		// 파라미터와 반환값이 없는 경우(위와 같은 내용이지만 조금은 명시적으로 표현한 식이다.) Unit은 자바의 void(리턴값없음)와 같다.
		
		- //파라미터로 람다식 받기
			//(Int, Int) -> Int 는 '(파라미터,...) -> 리턴타입' 을 의미한다. '=' 이후의 실제 함수 내용기술 여기서도 '{파라미터,.. -> 함수내용}'을 기술
			val multiply3: (Int, Int) -> Int = { a, b -> a * b }  
            val output1 = calc(30, 10, multiply3)
            textView.setText("곱하기 결과 : ${output1}")
		
			fun calc(first:Int, second:Int, oper:(Int, Int)->Int):Int {  //파라미터로 람다식 받기 (Int, Int) -> Int 는 '(파라미터,...) -> 리턴타입'
				return oper(first, second)
			}
			
		- //람다식으로 값리턴하기  
			val oper = getOperator("subtract")
			if (oper != null) {
				val result = calc(30, 10, oper)
				textView.setText("빼기 결과 : ${result}")
			}
		  
			fun getOperator(name:String) : ((Int, Int) -> Int)? {  //리턴타입을 람다식으로 지정. ((Int, Int) -> Int)? 는 '((파라미터,...) -> 리턴타입)' ?는 null을 허용하겠다는 의미.
				var oper:((Int, Int)->Int)? = null					
				if (name == "add") {
					oper = { a, b -> a + b }						
				} else if (name == "subtract") {
					oper = { a, b -> a - b }
				}

				return oper
			}
			
  -- if / when / for			
			
		- if 함수
			// if 문 사용
			if (a > b) {
				max = a
			} else {
				max = b
			}

			// 표현식으로 축약
			max = if (a > b) a else b

			// 표현식에서의 반환값
			max = if (a > b) {
				textView.setText("a를 선택합니다.")
				a
			} else {
				textView.setText("b를 선택합니다.")
				b
			}
					
		- when 함수 (자바의 switch case와 비슷하다.)
				ex)
				when (max) {											//switch
					10 -> textView.setText("값이 10입니다.")				//case
					20 -> textView.setText("값이 20입니다.")				//case
					else -> {											//else
						textView.setText("값이 10도 아니고 20도 아닙니다.")
					}
				}

				when (max) {
					10, 20 -> textView.setText("값이 10이거나 20입니다.")
					else -> {
						textView.setText("값이 10도 아니고 20도 아닙니다.")
					}
				}

				when (max) {
					in 1..20 -> textView.setText("값이 20 이하입니다.")
					else -> {
						textView.setText("값이 20보다 큽니다.")
					}
				}
			
		- for문 
			// 1~10까지 반복
			for (i in 1..10) {
				textView.append(" ${i}")
			}

			// 10에서 1까지실행하는데 2개씩 이동.
			for (i in 10 downTo 1 step 2) {
				textView.append(" ${i}")
			}
			
			// 0부터 10까지 실행.
			val size = 10
			for (i in 0 until size) {
				textView.append(" ${i}")
			}
	
  -- 클래스(동영상 2_4_~)
	- 클래스 객체 생성(인스턴스변수)
		val calc1 = Calc1() // 객체변수명(인스턴스변수) = 클래스명()   :  자바처럼 new는 사용안함.
		
	- 생성자(인스턴스변수가 생성 될때 해당 클래스의 기본으로 자동 실행되는 함수. 자바와 의미가 같음.)
		
		//ex1: 
		class Person2 {
			var name: String? = null
			var age: Int? = null
			lateinit var address: String
 
			//매개변수가 없는 생성자    ex> val per2 = Person2() 
			constructor() {
				println("첫번째 생성자 호출됨.")
			}

			//매개변수가 하나인 생성자   ex> val per2 = Person2("영미") 
			constructor(name:String?) {
				println("두번째 생성자 호출됨.")

				this.name = name
			}

			//매개변수가 세개인 생성자     ex> val per2 = Person2("영미",12,"서울") 
			constructor(name:String?, age:Int?, address:String) {
				println("세번째 생성자 호출됨.")

				this.name = name
				this.age = age
				this.address = address
			}

		}
		//---------------------------------------------------------------
		
		//ex1: 
		class Person3(val name:String?) {	//이렇게 클래스에 변수선언하면 constructor(name:String?)을 자동으로 생성해준다고 생각하면 된다.
		                                    //또한 매개변수가 클래스 전역변수로 자동으로 선언되며 그변수에 값이 자동 매핑된다.
			var age: Int? = null
			lateinit var address: String

			// 기본 생성자   : 위 클래스에서 자동 생성된 생성자가 인스턴스변수로 생성될 때 자동 실행 됨.   ex> val per3 = Person3("영미") 
			init {
				println("기본 생성자를 위한 코드 실행 부분입니다 : ${name}")
			}

			constructor(name:String?, age:Int?):this(name) {  //this(name)은 위 클래스에 매개변수를 넣어서 선언했기때문에 이걸 꼭 호출해줘야한다. 
				println("두번째 생성자 호출됨.")

				this.age = age
			}

			constructor(name:String?, age:Int?, address:String):this(name) { //this(name)은 위 클래스에 매개변수를 넣어서 선언했기때문에 이걸 꼭 호출해줘야한다.  
				println("세번째 생성자 호출됨.")

				this.age = age
				this.address = address
			}

		}
		
	- 클래스 상속 & 재정의
	  : 부모클래스의 변수나 함수를 자식이 그대로 물려받을수 있다.
	
		- 부모클래스
			open class Person(val name:String?) {	//부모클래스에서는 open이라는 명령어를 적어줘야 자식이 이 클래스를 상속받을수 있다.
				...
				open fun walk()	//자식에서 함수를 재정의 가능하게 하려면 fun앞에 open이라고 명시해줘야한다.
				{
					...
				}
			}
	
		- 자식클래스에서 부모 상속 및 함수재정의
			ex1 상속 >
				class Student(val alias:String?) : Person(alias) { 	//자바의 extends 대신에  ':클래스명(매개변수,...)'를 명시해준다.
					...
					constructor(alias:String?, age:Int?, address:String?):this(alias) {
						 ...
					}
				}
			
			ex2 상속 및 함수재정의 >			
				class Student2 : Person { //부모의  ':클래스명(매개변수,...)'를 생략할경우 밑에와 같이 ':super(alias)' 꼭 부모의 생성자를 호출해줘야 한다.
					...
					constructor(alias:String?, age:Int?, address:String?):super(alias) {	//
						...
					}				
					
					override fun walk() //부모의 함수를 재정의 하려면 override를 명시해줘야한다.(부모의 함수는 open이여야한다.)
					{
						...
					}
				}
			
		
	- 인터페이스 (동영상 2_5_1~)
	  - 인터페이스
	    꼭 기술해야하는 함수들에 명칭과 리턴타입등을 통일하기 위한 껍데기라고 생각하면 된다.
		함수내용 기술 불가.

		interface Calculator {						//인터페이스 정의
			fun add(a:Int, b:Int):Int				//함수 껍데기
		}		
		
		ex1 직접상속>
			class Calc2 : Calculator {					//인터페이스 상속
				override fun add(a: Int, b: Int): Int {	//인테페이스 함수 재정의(반드시 해야함)
					return a + b
				}
			}
		
		ex2 객체생성(변수화)>
			val calc1 = object: Calculator {			//인터페이스를 클래스에서 직접상속하지 않고 변수화해서 넣고 사용할수 있다.
                override fun add(a:Int, b:Int):Int {
                    return a - b
                }
            }
            val result1 = calc1.add(20, 10)				//인터페이스를 재정의한 함수 호출.
		
	  - 추상클래스
		함수내용기술 가능 및 인터페이스처럼 껍데기함수도 만든다. 
		상속은 일반 클래스처럼 하나만 상속이 가능.
		
		abstract class CalcAdapter {				//추상클래스
			fun add(a:Int, b:Int) = a + b			//구현된 함수
			abstract fun subtract(a:Int, b:Int):Int	//구현하지 않은 껍데기 함수
		}
		
		ex1 직접상속>
			class Calc5 : CalcAdapter() {						//추상클래스 상속(구현된 add함수는 그냥 사용가능)
				override fun subtract(a: Int, b: Int): Int {	//추상클래스 함수 재정의(반드시 해야함)
					return a - b
				}
			}
		
		ex2 객체생성(변수화)>
			val calc1 = object: CalcAdapter() {					//추상클래스를 클래스에서 직접상속하지 않고 변수화해서 넣고 사용할수 있다.
                override fun subtract(a:Int, b:Int):Int {
                    return a - b
                }
            }
            val result1 = calc1.subtract(20, 10)				//추상클래스 함수를 재정의한 함수 호출.
		 
	  - 람다식으로 인터페이스 재정의 하기 (동영상 2_5_3,4)
	  	
			//View 클래스의 interface OnClickListener를 직접 재정의...
			button.setOnClickListener(object: View.OnClickListener {		
				override fun onClick(v: View?) {
					showToast("첫번째 버튼 눌렸음.")
				}
			})
			
			//위 재정의를 밑에와 같은 방식들로 간결하게 람다식으로 재정의 할 수 있다.
			ex1>
			    //위에 코드를 람다식으로 정의
				button2.setOnClickListener( { v:View -> showToast("두번째 버튼 눌렸음.") })
			ex2>
				//자료형(View)은 (실제함수에서)추론 가능함으로 생략가능하다.
				button2.setOnClickListener( { v -> showToast("두번째 버튼 눌렸음.") })   
			ex3>
				//함수안에 파라미터가 여러개인데 그중 마지막 파라미터가 람다식이라면 밑에와 같이 소괄호 밖으로 뺄수 있다.
				button3.setOnClickListener() { v -> showToast("세번째 버튼 눌렸음.") }	    
			ex4>
				//함수가 하나의 파라미터를 가지고 이것이 함수 형식이라면 소괄호를 생략가능하다
				button4.setOnClickListener { v -> showToast("네번째 버튼 눌렸음.") }
			ex5>
				//만약 람다식의 파라미터를 소스상에 재정의시 사용하지 않는 경우는 이또한 생략가능하다. 
				//일반적으로 가장 많이 쓰는 형식이다. (원래 위와 같이 복잡한 내용을 다 정리한 방식이다.)
				button5.setOnClickListener { showToast("다섯번째 버튼 눌렸음.") }
				
				
				
	- 화면전환과 레이아웃(동영상 2_6_1~) 
		- Layout안에 특정 컨테이너에 '부분화면' 불러오기(동영상 2_6_1,2) - layoutInflater
		    //액티비티에서 제공하는 layoutInflater속성의 inflate함수를 사용해서 특정 container에 
			//부분화면(part1.xml)을 불러올수있다. inflate(layout,붙여줄컨테이너, )
			layoutInflater.inflate(R.layout.part1, container, true)
			
			참고> https://markim94.tistory.com/107
			
			
		- 새로운화면(Activity) 출력하기(동영상 2_6_3) - intent
			1.res/layout에서 오른쪽 클릭 -> new -> Activity -> 만드려는 화면 형식 선택.
			2.res/layout에 생성한 이름으로 새로운 Activity가 생성되고, java의 해당 패키지에도 똑같은 이름의 코틀린 소스가 생성된다.
			
			//intent란 간단히 말하자면 여러 화면(창) 간의 이동을 할 수 있도록 해주는 것이다.
			//Intent(콘텍스트객체,의울엑티비티객체)
			//::는 reflection기호다. MenuActivity라는 이름의 클래스 객체를 갖어온다.
			val intent = Intent(this, MenuActivity::class.java) 			
            intent.putExtra("data1", "김준수")		//putExtra : 화면 띄울때 파라미터로 데이터 추가해준다.
            startActivityForResult(intent, 101)			
			//startActivityForResult(인테트객체,요청코드)
			//startActivityForResult : Activity 띄우기 위해 intent를 전달하고 화면이 닫힐때 101 코드로 넘겨주겠다는것.
			//화면이 닫힐때 콜백으로 onActivityResult함수가 호출되고 위에서 지정한 requestCode(101)로 해당 화면임을 구분할수 있다.
			
			참고> https://korean-otter.tistory.com/entry/android-studio-kotlin-intent-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
			
			
	- 화면간에 파라미터 주고 받기(동영상 2_6_4,5) - intent
	    - (호출화면)데이터 넘기기 
			val intent = Intent(this, MenuActivity::class.java) 			
            intent.putExtra("data1", "김준수")		//putExtra : 화면 띄울때 파라미터로 데이터 추가해준다.
            startActivityForResult(intent, 101)		
			
		- (호출된화면)데이터 받기
		    if (intent != null) {	//여기서 intent는 getIntent()다.
				//호출화면에서 putExtra 로 넘기 데이터를 getStringExtra 로 받을수 있다.
				val data1 = intent.getStringExtra("data1")    
			}
		
		- (호출된화면)데이터 넘기기
			val intent = Intent()
            intent.putExtra("data2", "김하늘")
            setResult(Activity.RESULT_OK, intent)
			finish() //화면종료
			
		- (호출화면)데이터 (콜백에서)받기
			//onActivityResult : 화면종료 후 호출되는 콜백함수
			override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {	
				super.onActivityResult(requestCode, resultCode, data)
				
				when (requestCode) {
					101 -> {
						showToast("메뉴 액티비티로부터의 응답, ${requestCode}, ${resultCode}")

						if (data != null) {
							val data1 = data.getStringExtra("data2")    //파라미터 받기
						}
					}
				}
			}
			
		- 다른앱에 데이터 넘겨주기 (동영상 2_6_6) 		
			val mobile = input1.text.toString()
			val intent = Intent(Intent.ACTION_VIEW, Uri.parse("tel:${mobile}"))  
			// ACTION_VIEW : 화면을 띄워 줘라.
			// Uri.parse("tel:${mobile}") 는 전화를걸수 있는 앱을 띄우고 mobile변수를 넘기겠다는 뜻이다. 
			// => 전화를 걸수있는 앱을 시스템이 자동으로 판다.
			// 이런걸 암시적인테트라 한다.
			startActivity(intent)
	
	- 메서드 호출 순서 (동영상 2_6_6)
		- 액티비티가 보일때까지  : onCreate -> onStart -> onResume
		- 액티비티가 없어질때까지 : onPause  -> onStop  -> onDestory
		 
	- getSharedPreferences (동영상 2_6_7)
		간단한 값 저장에 DB를 사용하기에는 복잡하기 때문에 SharedPreferences를 사용하면 적합하다.
		보통 초기 설정값이나 자동로그인 여부 등 간단한 값을 저장하기 위해 사용한다.
		어플리케이션에 파일 형태로 데이터를 저장한다.
			=> data/data/패키지명/shared_prefs/SharedPreference이름.xml 위치에 저장
		어플리케이션이 삭제되기 전까지 보존된다.
		 
		- 데이터 저장하기
			val userName = input1.text.toString()
			//SharedPreferences인스턴스 얻기
			val pref = getSharedPreferences("pref", Activity.MODE_PRIVATE)  
			//데이터 저장하기.
			pref.edit().putString("userName", userName).commit()
		 
		- 데이터 읽기
			val pref = getSharedPreferences("pref", Activity.MODE_PRIVATE)
			val userName = pref.getString("userName", "")
		 
		-데이터 삭제하기

			특정 데이터 삭제
				SharedPreferences pref = getSharedPreferences("pref", MODE_PRIVATE);
				SharedPreferences.Editor editor = pref.edit();
				editor.remove("userName");
				editor.commit();

			모든 데이터 삭제
				SharedPreferences pref = getSharedPreferences("pref", MODE_PRIVATE);
				SharedPreferences.Editor editor = pref.edit();
				editor.clear();
				editor.commit();

		- 객체 저장하기

			gson 사용법 
				//Creating a shared preference
				SharedPreferences  mPrefs = getPreferences(MODE_PRIVATE);
				
			저장하기
				 Editor prefsEditor = mPrefs.edit();
				 Gson gson = new Gson();
				 String json = gson.toJson(MyObject);
				 prefsEditor.putString("MyObject", json);
				 prefsEditor.commit();
				 
			데이터 읽기
				Gson gson = new Gson();
				String json = mPrefs.getString("MyObject", "");
				MyObject obj = gson.fromJson(json, MyObject.class);

		참고> https://humble.tistory.com/9
		
		
	- 레이아웃 (동영상 2_6_8)
		참고>
		주요속성 : 
		    orientation     : 레이아웃 안에 배치할 위젯의 수직 또는 수평 방향을 설정한다.
			gravity         : 레이아웃 안에 배치할 위젯의 정렬 방향을 좌측, 우측, 중앙 등으로 설정한다.
			padding         : 레이아웃 안에 배치할 위젯의 여백을 설정한다.
			layout_weight   : 레이아웃이 전체 화면에서 차지하는 공간의 가중값을 설정한다.
			baselineAligned : 레이아웃 안에 배치할 위젯을 보기 좋게 정렬한다.
			
		레이아웃 종류 / 특징
		https://mrdevelop.tistory.com/entry/5-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%9D%B5%ED%9E%88%EA%B8%B0-2021-01-29
		https://codenet.tistory.com/13
		리니어레이아웃
		https://codenet.tistory.com/12
		렐러티브레이아웃(권장x , 밑에 컨스트레인트레이아웃과 기능이 비슷하며 컨스트레인트레이아웃을 권장)
		https://codenet.tistory.com/15?category=932426
		컨스트레인트레이아웃
		https://codenet.tistory.com/17?category=932426
		
		
	- 리스트만들기 
		-배열(동영상 2_7_1,2,3,4)	
			//배열을 정의하는 여러가지 방법. 
			
			//문자형 배열 arrayOf
			    //객체와 초기화를 동시에하는 방법.
				val names = arrayOf("홍길동1", "홍길동2", "홍길동3")
			    //람다식으로 밑에와 같이 만들면 자동으로 초기화할수 있다. (위와같이 홍길동1~3이 만들어진다.)
				val names2 = Array<String>(3, {index -> "홍길동${index+1}"}) 
				//3개배열이 null로 초기화 돼서 들어간다.
				val names3 = arrayOfNulls<String>(3)
				//크기자체를 지정하지 않고 빈배열 객체 생성.
				val names4 = emptyArray<String>()
			
			
			//숫자형 배열 intArrayOf
				val digits = intArrayOf(1, 2, 3)
				digits.set(2, 4)				//set   배열에 데이터 저장
				val aDigit = digits.get(2)		//get   배열에 데이터 값 불러오기
				val cnt    = digits.count()     //count 배열에 크기

				//plus(새로운값)	기존배열에 값을 추가해서 새로운 배열을 만들어준다.
				val digits2 = digits.plus(5)				
				//indexOf(찾을값) 	해당숫자 값이 몇번째 존재하는지 반환해준다.
				val aIndex  = digits2.indexOf(5)			
				//sliceArray(시작위치..끝위치)  	배열 index의 범의를 지정해서 새로운 배열을 만들어준다.
				val digits3 = digits2.sliceArray(1..aIndex) 
				
			
			//배열에 모든 내용 출력하려면 Arrays.toString() 사용
				textView.append("\n${Arrays.toString(digits3)}")
				
				
			//배열 loop
				//forEach
				val digits = intArrayOf(2, 1, 3)
				digits.forEach { elem -> textView.append(" $elem ") }
				
				//forEachIndexed
				digits.forEachIndexed{index, i ->
					textView.append("\n${index} : ${i}")
				}

				//for in
				textView.append("\n")
				for (elem in digits) {
					textView.append(" $elem ")
				}

				//while
				textView.append("\n")
				val iter = digits.iterator()
				while(iter.hasNext()) {
					val elem = iter.next()
					textView.append(" $elem ")
				}
				
			//배열안에 데이터 정렬하기 sortedArray(오름차순),sortedArrayDescending(내림차순)
				val digits = intArrayOf(2, 1, 3)
				
				val sorted = digits.sortedArray()
				textView.append("\n${Arrays.toString(sorted)}")
				
				val sortedDesc = digits.sortedArrayDescending()
				textView.append("\n${Arrays.toString(sortedDesc)}")

			//데이터 필터링 filter -> loop돌면서 특정 조건이 부합되는 데이터들만 실행 가능하도록하는 함수 
			//(for문 안에 if문 같이 쓴거와 같은 동작)
				textView.append("\n")
				digits.filter { elem -> elem > 1 }.forEach { elem -> textView.append(" $elem ") }
				 
		
		-List(동영상 2_7_5)			
			
			//배열을 정의하는 여러가지 방법. 
			
			//listOf 객체와 초기화를 동시에하는 방법. (이렇게 만들면 값을 추가하거나 변경할 수 없다.)
				val names  = listOf("홍길동1", "홍길동2", "홍길동3")			    
			//List<String> 이용 람다식으로 밑에와 같이 만들면 자동으로 초기화할수 있다.(위와같이 홍길동1~3이 만들어진다.)
				val names2 = List<String>(3, {index -> "홍길동${index+1}"})
			//mutableListOf는 listOf와 다르게 값을 변경(set) 추가(add)가능하다.
				val names3 = mutableListOf<String>("홍길동1", "홍길동2", "홍길동3")
			//빈LIST 객체 생성.
				val names4 = emptyList<String>()
			//arrayListOf,ArrayList  가장많이 쓰는 방식. (추가,변경 당연히 가능... 그냥 이거써라.)
				val names5 = arrayListOf<String>("홍길동1", "홍길동2", "홍길동3")
				var names6 = ArrayList<String>()
			
			//리스트에 모든 내용 출력하려면 joinToString() 사용
				textView.append("\n${names.joinToString()}")
			 
			//리스트 수정및 값가져오기
				val digits = arrayListOf<Int>(1, 2, 3)
				digits.set(2, 4)
				val aDigit = digits.get(2)           

			//리스트 값 추가.
				digits.add(5)
				
			//리스트 기타 제공함수
				if (digits.contains(5)) {					//리스트에 값이 있는지 확인
					val aIndex = digits.indexOf(5)			//리스트에 특정값에 index찾기
					
					//slice(시작위치..끝위치)	index의 범의를 지정해서 새로운 List를 만들어준다.
					val digits3 = digits.slice(1..aIndex)	
					
				}
				
			//리스트에 forEach나 loop지원, sorted등은 위에 적은 배열와 같으니 그걸 참고하길 바랍니다.
			
	- 화면의 일부를 차지하는 (부분화면)레이아웃 객체만들기(동영상 2_7_6,7 소스:MyCustomLayout)
	  단지 임위에 부분화면으로 불러와서 보여주기식 용도가 아닌 하나의 객체처럼 생성해서 화면에 붙이는 방법이다. 
	  일종의 커스텀객체다.
		- 사용자가 만든 커스텀객체처럼 여러 layout에서 갖다가 사용할수 있다.
		- 그냥 임위에 부분화면 불러오는건 위에 기술한거 참조 (예를 들면 div에 화면불러오는 듯한 로직) 
	       => (동영상 2_6_1~) layoutInflater.inflate(R.layout.part1, container, true)
	  
		1. layout디자인 xml 만들기
		   layout에서 오른쪽 클릭 -> new -> layout Resource File -> 이름넣고(Part1) -> ok 하면 layout xml파일이 생성된다.
		   ex> LinearLayout으로 화면 구성...
		
		2. layout source파일 만들기
		   java -> 해당패키지에서 오른쪽 클릭 -> new -> kotlin calss/file -> name(part1)넣고 class선택된 상태에서 enter		    
			//위에서 생성한 클래스 파일에 Layout상속받고 밑에 두개 생성자는 반드시 재정의 해주고, LayoutInflater로 화면 정의해줘야함.
			ex>
				class Part1 : LinearLayout {
					constructor(context: Context?) : super(context) {
						onInit(context)
					}
					constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs) {
						onInit(context)
					}
					fun onInit(context: Context?) {
						//inflate(레이아웃객체,붙일곳,바로붙일지여부)
						LayoutInflater.from(context).inflate(R.layout.part1, this, true) 
					}
					
					part1.funTest(){
						println("커스텀객체 함수")
					}
				}
				
		3. 위에 만들어진 layout을 객체처럼 붙이기
			//activity_main.xml code부분에 밑에 구문추가.
				<org.techtown.customlayout.Part1
					android:id="@+id/part1"
					android:layout_width="match_parent"
					android:layout_height="wrap_content" />
					
			//이렇게 추가해주면 디자인화면에 바로 보이지는 않지만 빌드하고 한번 실행후에는 디자인화면에서도 보인다.
			
		4. MainActivity에서 생성한 객체 접근하기.
		    -> 해당 (레이아웃)객체에 함수와 객체모두 접근가능하다.  
				ex> 
					part1.funTest() 
					part1.textView.setText("홍길동") 
			
					
	- 리싸이클러뷰로 리스트만들기(동영상 2_7_8,9 소스:MyRecyclerView)	
		전화번호 앱처럼 반복되는 데이터 집합을 계속해서 반복해서 리스트처럼 보여줄수 있는데. 이때 리싸이클러뷰를 사용한다.
		위에서 만들어본 커스텀레이아웃객체를 반복적으로 뿌려줄수 있다.
		
		1. layout디자인 xml 만들기
		   layout에서 오른쪽 클릭 -> new -> layout Resource File -> 이름넣고(person) -> ok 하면 layout xml파일이 생성된다.
		   ex> LinearLayout으로 화면 구성...
		   
		2. data class만들기
			java -> 해당패키지에서 오른쪽 클릭 -> new -> kotlin calss/file -> name(person)넣고 class선택된 상태에서 enter	
			
			//자바의 vo class같은 클래스를 data class라한다. 
			//특이점은 vo 처럼 get,set함수를 만들필요 없이 밑에와 같이 변수만 만들어 주면 된다.
			data class Person(val name: String?, val mobile: String?)
			
		3. RecyclerView만들기
			activity_main.xml열고 design에서 containers -> RecyclerView를 선택해서 적당한 위치에 배치해준다.
			
		4. Adapter class만들기(동영상 2_7_9,10 소스:MyRecyclerView)
			java -> 해당패키지에서 오른쪽 클릭 -> new -> kotlin calss/file -> name(PersonAdapter)넣고 class선택된 상태에서 enter				
			- RecyclerView.Adapter 의 역활은 데이터 관리 및 데이터를 RecyclerView에 어떻게 보여줄지를 관여를 한다.		 
			
			//생성을 위해서는 RecyclerView의 Adapter를 상속받아야한다. <뷰홀더> 는 밑에 inner class로 만들어줘야한다.
			//제대로 작동하려면 getItemCount,onCreateViewHolder,onBindViewHolder를 반드시 재정의해줘야한다.
			class PersonAdapter : RecyclerView.Adapter<PersonAdapter.ViewHolder>() {  
				
				//위에서 만든 Person Data클래스 형식의 List를 만들어준다.
				var items = ArrayList<Person>()  

				lateinit var listener: OnPersonItemClickListener

				//필수오버라이드 메소드1
				//RecyclerView에 보여줄 데이터의 개수를 리턴해주는 함수
				override fun getItemCount() = items.size		

				//필수오버라이드 메소드2
				//ViewHolder가 생성될때 호출된다. 인자값중 parentVG는 ViewHolder가 item을 담고있을 최상위 레이아웃이라고 생각하면 된다.
				override fun onCreateViewHolder(parentVG: ViewGroup, viewType: Int): ViewHolder {
					//person layout을 붙여준다.
					val itemView = LayoutInflater.from(parentVG.context).inflate(R.layout.person, parentVG, false)

					//아래서 만든 ViewHolder를 호출해주고 리턴해준다.
					return ViewHolder(itemView)
				}
				
				//필수오버라이드 메소드3
				//ViewHolder에 데이터를 바인딩 시켜주는 역활을한다.
				override fun onBindViewHolder(holder: ViewHolder, position: Int) {
					val item = items[position]
					holder.setItem(item)	//밑에 만들어준 inner class ViewHolder 클래스에 데이터를 넣어준다.
				}

				//ViewHolder는 화면에 리스트형태로 객체를 뿌릴때 view자체를 계속생성하는 것이 아니라 
				//한번에 보여줄수 있는 만큼 만들고 스크롤을 내릴때 마다 데이터만 바꿔주는 형태라 그걸 담고있을 Holder를 만들어주는것이다. 
				//즉 데이터가 1만개면 1만개에 객체를 만드는게 아니고 스크롤이 내려질때마다 가려지는 view가 새로보여지는 view로 넘어가서
				//데이터만 바뀌는형태고 객체를 돌려막기한다.(전화번호앱을 생각해보세요...)
				//생성을 위해서는 RecyclerView.ViewHolder를 상속받아야한다.(인자값으로 생성된 view를 넘겨줘야한다)
				inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {  
					init {
						itemView.setOnClickListener {
							listener?.onItemClick(this, itemView, adapterPosition)
						}
					}

					fun setItem(item: Person) {  
						//Person 객체에 데이터를 세팅해준다.
						itemView.textView.text = item.name
						itemView.textView2.text = item.mobile
					} 
				}
			}
		  
		5. MainActivity에 (3번에서만든)recyclerView 세팅하기.(동영상 2_7_10 )
		    
			-LinearLayoutManager 생성 및 할당.
				//LinearLayoutManager - RecyclerView 작동시 스크롤이 상하가 될수도 있고 좌우가 될수도 있기때문에
				//이거에 대한 설정과 관리를 해주는것이다.
				val layoutManager = LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false)
				//해당 recyclerView객체에 layoutManager할당.
				recyclerView.layoutManager = layoutManager  
					
					
			- Adapter객체 생성 및 recyclerView에 객체할당.			
			    //위에서 만든 adapter객체생성.
				val adapter = PersonAdapter()	

				//데이터생성.
				adapter.items.add(Person("홍길동1", "010-1000-1000"))
				adapter.items.add(Person("홍길동2", "010-2000-2000"))
				adapter.items.add(Person("홍길동3", "010-3000-3000"))

				//해당 recyclerView객체에 Adapter할당.
				recyclerView.adapter = adapter  

		6. OnClickListener 만들기. (동영상 2_7_10 )
			 adapter에 inner class ViewHolder안쪽에서 OnClick이벤트를 캐치해서 소스를 작동하게 할수도 있지만
			여기서는 recyclerView자체를 main쪽에 만들었고 소스에 정체성을 위해서 adapter에 직접구현하지 않고
			새로우 리스너를 만들어서 연결해보도록 하겠다.
		
			- interface 클래스 생성.
				java -> 해당패키지에서 오른쪽 클릭 -> new -> kotlin calss/file 
				-> name(OnPersonItemClickListener)넣고 class선택된 상태에서 enter
			
				interface OnPersonItemClickListener {
					fun onItemClick(holder: PersonAdapter.ViewHolder?, view: View?, position: Int)
				}
		
			- adapter의 inner class ViewHolder안쪽에 객체에 OnClick이벤트를 연결해준다.
			
			    init {
						itemView.setOnClickListener {
							listener?.onItemClick(this, itemView, adapterPosition)
						}
					}
		
			- MainActivity  recyclerView객체에 listener할당및 기능정의
			
				adapter.listener = object : OnPersonItemClickListener {
					override fun onItemClick(holder: PersonAdapter.ViewHolder?, view: View?, position: Int) {
						val name = adapter.items[position]
						showToast("아이템 선택됨 : $name")
					}
				}

	- 코드블럭 (동영상 2_7_11,12 소스:MyBlock)
		
		1. 테스트용 data class만들기
			java -> 해당패키지에서 오른쪽 클릭 -> new -> kotlin calss/file -> name(Person)넣고 class선택된 상태에서 enter	
			
			//자바의 vo class같은 클래스를 data class라한다. 
			//특이점은 vo 처럼 get,set함수를 만들필요 없이 밑에와 같이 변수만 만들어 주면 된다.
			data class Person(
				var name:String? = null,
				var age:Int? = null,
				var mobile:String? = null
			) {
				override fun toString():String {
					return "Person [${name}, ${age}, ${mobile}]"
				}
			}
			
			
		5. MainActivity에서 data class(Person) 여러가지 코드블럭을 이용한 객체생성방법 및 사용방법들. 
		
			//1.(일반적인방법) data class 객체생성
				var person1: Person? = Person()	
				person1?.name = "홍길동"
				person1?.age = 20
				person1?.mobile = "010-1000-1000"
			
			//2.(apply)를 이용한 data class 객체생성
				// 객체가 바로생성되는것이 아니고 apply안에 내용이 실행된수 결과가 반환되서 객체화됨
				// 그래서 위에서와 같이 객체.변수로 초기화 하지않고 밑에와 같이 그냥 변수명만으로도 초기화등이 가능하다.
				// 객체의 속성값을 할당하거나 객체의 여러 메서드를 사용할 때 유용하다.
				var person1 = Person().apply {
										name = "홍길동"
										age = 20
										mobile = "010-1000-1000"

										val info = toString()	
										showToast("새로 만든 사람 -> $info")
									} 
			
			//3.생성과 동시에 데이터 초기화하기
				val person1 = Person("홍길동", 20, "010-1000-1000")
			
			//4.(with) 이미 생성한 Person객체에대한 사용
				// 객체의 여러 메서드를 사용할 때 유용함
				// 결과값으로 객체가 반환되지 않아도 되는 경우 사용
				val person2 = Person("홍길동", 20, "010-1000-1000")
				showToast("이름 : ${person2?.name}")
				//위 구문을 with를 쓰면 밑에와 같이 간결하게 쓸스있다.
				with(person2!!) {
					showToast("이름 : $name")
					showToast("나이 : $age")
					showToast("전화번호 : $mobile")
				}
			
			//5.(let과 run) 객체의 null 검사 후 객체를 여러 번 사용해야 할 때 유용함
				// ?. 은 한 개의 메서드만 호출 가능하지만 let과 run은 여러 메서드 호출 가능함
				// ?:(null일경우 실행됨) run과 같이 사용될 수 있음
				var person1:Person? = null
				
				if(person1!=null) {
					showToast("이름 : ${person1.name}")
					showToast("나이 : ${person1.age}")
					showToast("전화번호 : ${person1.mobile}")
				}
				else{
					showToast("사람이 null입니다.")
				}

				//위에 구문을 밑에와 같이 let과 ?: run로 기술할수 있다.
				person1?.let { it:Person //(이부분 it은 직접기술해야하는 부분은 아니고 자동생성되는부분이다.)
					showToast("이름 : ${it.name}")
					showToast("나이 : ${it.age}")
					showToast("전화번호 : ${it.mobile}")
				} ?: run {
					showToast("사람이 null입니다.")
				}
				
				//위에 구문을 밑에와 같이 run과 ?: run로 기술할수 있다.
				//여기서 run에 장점은 person자체가 this로 잡히기 때문에 생략가능하다는 것이다.
				person1?.run { this:Person  //(이부분 this는 직접기술해야하는 부분은 아니고 자동생성되는부분이다.)
					showToast("이름 : ${name}")
					showToast("나이 : ${age}")
					showToast("전화번호 : ${mobile}")
				} ?: run {
					showToast("사람이 null입니다.")
				}
			
			//6.also
				//객체의 유효성을 검증할 때 유용함
				//결과값으로 객체가 반환됨
				val person1 = Person()
				val person2 = person1.also { it:Person //(이부분 it은 직접기술해야하는 부분은 아니고 자동생성되는부분이다.)
											if (it.name == null) {
												showToast("name 속성값이 null입니다.")
												it.name = "홍길동"
											}
										}
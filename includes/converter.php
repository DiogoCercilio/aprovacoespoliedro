<?php require_once"excel_reader2.php";


try {
	$data = new Spreadsheet_Excel_Reader("example.xls");
} catch (Exception $e) {
  echo "Exceção pega: ",  $e->getMessage(), "\n";
}

// Atualiza Sheet 1************************************************************ 	
$rows = $data->rowcount($sheet_index=0);
$aprovados_ita;
$i;
$j;
$k;
$l;

for( $i = 1; $i <= $rows; $i++ ){
	if($i !== $rows){
		$aprovados_ita .= "{nome:'".$data->val($i,'A')."',	unidade:'".$data->val($i,'B')."'},";
	}else{
		$aprovados_ita .= "{nome:'".$data->val($i,'A')."',	unidade:'".$data->val($i,'B')."'}]\";";
	}
}

// Atualiza Sheet 2************************************************************ 	
$rows1 = $data->rowcount($sheet_index=1);
$aprovados_medicina;
$j;

for( $j = 1; $j <= $rows1; $j++ ){
	if($j !== $rows1){
		$aprovados_medicina .= "{nome:'".$data->val($j,'A',1)."',	unidade:'".$data->val($j,'B',1)."'},";
	}else{
		$aprovados_medicina .= "{nome:'".$data->val($j,'A',1)."',	unidade:'".$data->val($j,'B',1)."'}]\";";
	}
}

// Atualiza Sheet 3************************************************************ 	
$rows2 = $data->rowcount($sheet_index=2);
$aprovados_engenharia;
$j;

for( $k = 1; $k <= $rows2; $k++ ){
	if($k !== $rows2){
		$aprovados_engenharia .= "{nome:'".$data->val($k,'A',2)."',	unidade:'".$data->val($k,'B',2)."'},";
	}else{
		$aprovados_engenharia .= "{nome:'".$data->val($k,'A',2)."',	unidade:'".$data->val($k,'B',2)."'}]\";";
	}
}

// Atualiza Sheet 4************************************************************ 	
$rows3 = $data->rowcount($sheet_index=3);
$aprovados_humanas;
$j;

for( $l = 1; $l <= $rows3; $l++ ){
	if($l !== $rows3){
		$aprovados_humanas .= "{nome:'".$data->val($l,'A',3)."',	unidade:'".$data->val($l,'B',3)."'},";
	}else{
		$aprovados_humanas .= "{nome:'".$data->val($l,'A',3)."',	unidade:'".$data->val($l,'B',3)."'}]\";";
	}
}

// Atualiza Sheet 5************************************************************ 	
$rows4 = $data->rowcount($sheet_index=4);
$aprovados_biologicas;
$j;

for( $m = 1; $m <= $rows4; $m++ ){
	if($m !== $rows4){
		$aprovados_biologicas .= "{nome:'".$data->val($m,'A',4)."',	unidade:'".$data->val($m,'B',4)."'},";
	}else{
		$aprovados_biologicas .= "{nome:'".$data->val($m,'A',4)."',	unidade:'".$data->val($m,'B',4)."'}]\";";
	}
}

$filename = "dados.php";
$script  = "<?php \$aprovados_ita = \"[" . $aprovados_ita . "\n";
$script .= "	  \$aprovados_medicina = \"[" . $aprovados_medicina . "\n";
$script .= "	  \$aprovados_engenharia = \"[" . $aprovados_engenharia . "\n";
$script .= "	  \$aprovados_humanas = \"[" . $aprovados_humanas . "\n";
$script .= "	  \$aprovados_biologicas = \"[" . $aprovados_biologicas . "\n";

$script .= "?>";

$file = @fopen($filename, "w+");
@fwrite($file, stripslashes($script));
@fclose($file);

echo "<script type='text/javascript'>
			alert('Sua lista de alunos foi atualizada com Sucesso!');
			window.location = 'http://sistemapoliedro.com.br/teste/cursos/aprovacoes';
	  </script>";

// echo $aprovados_engenharia_usp;

// echo $data->rowcount($sheet_index=0)."<br/>";
// echo $data->colcount($sheet_index=0);

 
// $totalLinhas = $data->rowcount();
// $totalColunas = $data->colcount();
 
// for ($i = 1; $i <= $totalLinhas; $i++) {
//     for ($j = 1; $j <= $totalColunas; $j++) {
//             $array  = $data->val($i, $j);
//     }
// }

// echo $data->dump(true,true);

?>
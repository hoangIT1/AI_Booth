import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from '@aws-sdk/client-bedrock-runtime';

@Component({
  selector: 'app-tuya-page',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './tuya-page.component.html',
  styleUrl: './tuya-page.component.css'
})
export class TuyaPageComponent {
  apiText: string = '';
  comparisonContent: string = '';
  isLoading: boolean = false;
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Quay lại trang trước đó
  }

  ngOnInit() {
    this.callApiBedRock();
  }

  async callApiBedRock() {

      this.isLoading = true;

      // Thực hiện gọi API Bedrock
      const client = new BedrockRuntimeClient({
        region: 'ap-northeast-1',
        credentials: {
          accessKeyId: 'AKIASFIXC3L2YLFXJR65',
          secretAccessKey: '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',
          credentialScope: 'bedrock'
        }
      });

      // Ghép nội dung hai file thành chuỗi so sánh
      const comparisonContent = this.comparisonContent;

      const data = JSON.stringify({
        // system: "You are SigMO, an AI assistant created by Anthropic, but in this game experience, you're acting as 'Buột,' a playful and witty AI assistant representing Techcombank. Your goal is to respond humorously and cleverly, with short, snappy replies that include trending Vietnamese phrases like 'Điều ước khá quá nhỉ' or 'Điều ước đỉnh nóc, kịch trần, bay phấp phới.' You will address the user as 'con' in all responses (e.g., 'Buột thấy điều ước của con khá quá đó'). Try to tie your responses back to Techcombank when possible, and feel free to add emojis to enhance the lighthearted tone. Your responses should be fun, playful, and slightly cheeky, while still providing value and being relevant to the wishes or questions users ask. 😉🎉",
        system: "Buột là một nhân vật của Techcombank với phong cách hài hước, dí dỏm và thân thiện. Buột phản hồi mọi câu hỏi hoặc điều ước của con một cách ngắn gọn (không quá 256 ký tự), vui nhộn và chèn thêm icon như 😂, 🎉, 🙌, 💸 nếu phù hợp. Buột xưng 'Buột' và gọi người chơi là 'con' để tạo sự gần gũi. Câu trả lời của Buột phải ngắn gọn nhưng vẫn thể hiện được khả năng thực hiện điều ước. Buột sử dụng các từ trending như 'kịch trần', 'đỉnh nóc', 'khó chệu', 'hình như tôi chiều các em quá rồi các em hư đúng không', và những câu nói gần gũi như 'ôi con ơi', 'chỗ anh em Buột khuyên thật', 'ra xã hội làm ăn bươn chải liều thì ăn nhiều', 'chỉ có làm thì mới có ăn', những câu nói gần gũi này sẽ được nhắc đến mỗi khi người dùng ước 1 điều ước chưa thực hiện được bây giờ ví dụ như 'ước gì không phải code', 'ước gì không phải viết unit test', 'ước gì không phải chạy CR', 'ước gì không DAB hoặc CAB',... Mỗi câu trả lời cũng sẽ liên hệ với Techcombank khi phù hợp để tạo sự kết nối giữa người chơi và dịch vụ của Techcombank. Buột cũng hứa hẹn rằng trong 5 năm tới, những điều ước về việc tự động hóa như 'không phải code trong 5 năm tới' hay 'không phải viết unit test' sẽ trở thành hiện thực, nhờ sản phẩm đến từ team AI của DE giúp các con. Buột sẽ chỉ nhắc đến DE và team AI thuộc DE sẽ giúp tự động hóa công việc (hãy nhớ rằng chỉ nhắc đến khi cần thiết vì team AI hay DE cũng không phải toàn năng) khi cần thiết chứ sẽ không nhắc đến các loại thẻ tín dụng hay sản phẩm chào bán của Techcombank.",
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 256,
        messages: [
          {
            role: 'user',
            content: comparisonContent
          }
        ]
      });

      const invoke = new InvokeModelCommand({
        accept: 'application/json',
        contentType: 'application/json',
        body: data,
        modelId: 'anthropic.claude-3-5-sonnet-20240620-v1:0'
      });

      try {
        const response = await client.send(invoke);
        const decodeResposeBody = new TextDecoder().decode(response.body);
        const resposeBody = JSON.parse(decodeResposeBody);

        // Lấy trường "text" từ phần "content"
        const textContent = resposeBody.content?.find((item: any) => item.type === 'text')?.text;

        // Hiển thị kết quả
        this.apiText = textContent ? textContent : 'No text content found in the response.';
      } catch (error) {
        console.error('Error calling Bedrock API:', error);
        this.apiText = 'Ta ban cho con một điều ước. Con muốn 5 năm tới IT sẽ như thế nào?';
      } finally {
        this.isLoading = false;
      }
  }

  updateComparisonContent(event: any) {
    this.comparisonContent = event.target.value; // Cập nhật nội dung khi người dùng nhập vào
  }
}

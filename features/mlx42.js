/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   mlx42.js                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: fbes <fbes@student.codam.nl>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/02/14 10:19:10 by fbes          #+#    #+#                 */
/*   Updated: 2022/04/20 17:26:48 by fbes          ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

function addMLX42Link() {
	let projectAttachments = document.querySelector(".project-attachment-item");
	if (!projectAttachments) {
		return;
	}
	projectAttachments = projectAttachments.parentNode;

	const mlx42item = document.createElement("div");
	mlx42item.className = "project-attachment-item";

	const mlx42name = document.createElement("h4");
	mlx42name.className = "attachment-name";

	const mlx42icon = document.createElement("span");
	mlx42icon.className = "icon-file";
	mlx42icon.style.marginRight = "4px";
	mlx42icon.style.display = "inline-block";
	mlx42icon.style.verticalAlign = "top";
	mlx42name.appendChild(mlx42icon);

	const mlx42link = document.createElement("a");
	mlx42link.setAttribute("href", "https://github.com/W2Codam/MLX42");
	mlx42link.setAttribute("target", "_blank");
	mlx42link.setAttribute("title", "Open-source OpenGL version of MLX by W2Wizard (lde-la-h). This link was added by Improved Intra 42.");
	mlx42link.innerText = "MLX42 (2022, only allowed at Codam College)";
	mlx42link.style.whiteSpace = "initial";
	mlx42link.style.display = "inline-block";
	mlx42icon.style.verticalAlign = "top";
	mlx42name.appendChild(mlx42link);

	mlx42item.appendChild(mlx42name);
	projectAttachments.appendChild(mlx42item);
}

addMLX42Link();
/**
 * Класс для работы с API
 *
 * @author		Никита Костров
 * @version		v.1.0 (16/07/2024)
 */
class Api
{
    /**
     * Заполняет строковый шаблон template данными из объекта object
     *
     * @author		Никита Костров
     * @version		v.1.0 (16/07/2024)
     * @param		{object} object
     * @param		{string} template
     * @return		{string}
     */
    get_api_path(object, template)
    {
        return Object.keys(object).reduce((result, key) => {
            return result.replace(new RegExp(`%${key}%`, 'g'), encodeURIComponent(object[key]))
        }, template);
    }
}

let user =
    {
        id		: 20,
        name	: 'John Dow',
        role	: 'QA',
        salary	: 100
    };

let api_path_templates =
    [
        "/api/items/%id%/%name%",
        "/api/items/%id%/%role%",
        "/api/items/%id%/%salary%"
    ];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) =>
{
    return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths))